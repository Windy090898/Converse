function Validator(formSelector, options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var formRules = {}

    var validatorRules = {
        required: function (value) {
            return value ? undefined : "Please input"
        },
        email: function (value) {
            var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return regex.test(value) ? undefined : "Please input valid email"
        },
        name: function (value) {
            var regex = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;
            return regex.test(value) ? undefined : "Input right name format"
        },
        min: function(min) {
            return function(value) {
                return value.length >= min? undefined : "Please input at least " + min + " characters"
            }
        },
        max: function(max) {
            return function(value) {
                return value.length <= max ? undefined : "Please input less than " + max + " characters"
            }
        },
        confirmed: function (selector) {
            return function(value) {
                var confirmValue = formElement.querySelector(selector).value
                return value === confirmValue ? undefined : "Please input same value"
            }
        },
        number: function (value) {
            return isNaN(Number(value)) ? "Please enter number only" : undefined
        },
        password: function (value) {
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/
            return regex.test(value) ? undefined : "Input password with the specified criteria"
        }
    }

    var formElement = document.querySelector(formSelector);
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rule]')
        for (var input of inputs) {
            var rules = input.getAttribute('rule').split('|')

            rules.forEach(rule => {
                var ruleInfor 
                var hasValue = rule.includes(':')
                if (hasValue) {
                    ruleInfor = rule.split(':')
                    rule = ruleInfor[0]
                } 

                var ruleFunc = validatorRules[rule]

                // if rule have value like min: 6
                if (hasValue) {
                    ruleFunc = ruleFunc(ruleInfor[1])
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                } else {
                    formRules[input.name] = [ruleFunc]
                }

            })  

            // Add event listeners to validate
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }
        console.log(formRules)
        

        // function handleValidate()
        function handleValidate(e) {
            var rules = formRules[e.target.name]

            for (var rule of rules) {
                switch (e.target.type) {
                    case 'radio':
                    case 'checkbox':
                        errorMessage = rule(formElement.querySelector(`[name="${e.target.name}"]:checked`));
                        break;
                    default:
                        errorMessage = rule(e.target.value)
                }           
                if (errorMessage) break
            }

            // if have error, display the error message on the UI
            if (errorMessage) {
                var parentElement = getParent(e.target, '.form-group')
                if (parentElement) {
                    var errorElement = parentElement.querySelector('.sp-info')
                    errorElement.innerHTML = errorMessage

                    parentElement.classList.add('invalid')
                }
            } 

            return !errorMessage
        }

    
        // function clear error when input
        function handleClearError(e) {
            var parentElement = getParent(e.target, '.form-group')
            if (parentElement.classList.contains('invalid')) {
                parentElement.classList.remove('invalid')
                var errorElement = parentElement.querySelector('.sp-info')
                errorElement.innerHTML = ""
            }
        }


        formElement.onsubmit = function(e) {
            e.preventDefault()
            var isValid = true
            
            for (var input of inputs) {
                if (!handleValidate({target: input})) {
                    isValid = false
                }
            }


            
            if (isValid) {
                if (typeof options.onSubmit === 'function') {

                    var formValues = Array.from(inputs).reduce((values, input) => {

                        switch (input.type) {
                            case 'radio':
                            case 'checkbox':
                                if (!input.matches(':checked')) return values
            
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = []
                                }
            
                                values[input.name].push(input.value)
                                break;
                            case 'file':
                                values[input.name] = input.files
                                break;
                            default:
                                values[input.name] = input.value
                        }
                        return values
                    }, {})

                    options.onSubmit(formValues)
                } else {
                    formElement.submit()
                }
            }
        }
    }

    
}