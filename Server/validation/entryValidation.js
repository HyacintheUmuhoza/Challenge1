import joi from 'joi';


const validateEntry = {
    validate(newEntry) {
        const userEntry = {
            
            title: joi.string().required(),
             description: joi.string().required(),
        };
        return joi.validate(newEntry, userEntry);
    },
 };
 export default validateEntry;
