hrApp.service('MathService', function () {
        return {
            add: function (a,b) {
                return a+b;
            },
            substract: function (a,b) {
                return a-b;
            },
            produs: function (a,b) {
                return a*b;
            },
            div: function (a,b) {
                return a/b;
            }
            // TODO #14 add multiply and divide functions
        }
    }
);

//MathS