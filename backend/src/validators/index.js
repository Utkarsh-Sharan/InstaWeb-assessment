import {body} from "express-validator";

const leadCreationValidator = () => {
    return [
        body("name")
            .trim()
            .notEmpty()
            .withMessage("Lead name is required!")
            .isLength({min: 2})
            .withMessage("Lead name must be atleast 2 characters long!"),
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required!")
            .isEmail()
            .withMessage("Email is invalid!"),
        body("phone")
            .trim()
            .notEmpty()
            .withMessage("Phone number is required!")
            .isMobilePhone()
            .withMessage("Phone number is invalid!"),
        body("companyName")
            .trim()
            .notEmpty()
            .withMessage("Company name is required!")
            .isLength({min: 2})
            .withMessage("Company name must be atleast 2 characters long!"),
    ];
};

export {
    leadCreationValidator,
}