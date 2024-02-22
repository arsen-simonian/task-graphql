type ControllerInputType =  ApplicantIndividualCompanyRelation[] | ApplicantIndividualCompanyPosition;

interface Inputs {
    relations: ControllerInputType;
    positions: ControllerInputType;
    name: string;
    description: string;
}

type FormControlType = Control<Inputs, any, Inputs>

type FormErrorsType = FieldErrors<Inputs>