import { extend, localize } from "vee-validate";
import { alpha_dash, alpha_spaces, required, email, min } from "vee-validate/dist/rules";

const dictionary = {
    en: {
        messages: {
            alpha_dash: () => 'Must not include spaces',
            alpha_spaces: () => 'Only alphabetic characters or spaces',
            email: () => 'Please enter a valid email adress',
            min: (field, params) =>  `Must be at least ${params.length} characters long`,
            required: () => '* Required',
        },
    }
};

// Install rules
extend("alpha_dash", alpha_dash);
extend("alpha_spaces", alpha_spaces);
extend("email", email);
extend("min", min);
extend("required", required);

localize(dictionary);
