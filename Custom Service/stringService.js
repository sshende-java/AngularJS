//service in AngularJs is simply an object that provides some sort of service that can be reused within an application.
// It has logic or code that does not belong anywhere else.
//factory method is used to create a service

app.factory('stringService', function () {
    return {
        processString: function (input) {
            if (!input) {
                return input;
            }
            var output = '';

            for (var i = 0; i < input.length; i++) {
                if (i > 0 && input[i] == input[i].toUpperCase()) {
                    output = output + " ";
                }
                output = output + input[i];
            }

            return output;
        }
    }
});