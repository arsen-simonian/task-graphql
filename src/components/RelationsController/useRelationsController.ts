import { useQuery } from "@apollo/client";
import { Query } from "../../data-loaders/graphql-loaders";
import { GET_RELATIONS } from "../../graphql";
import { useState } from "react";
import { ApplicantIndividualCompanyRelation } from "../../types/graphql-types";

interface Props {
    setFormValue: (
        val: ControllerInputType,
        input: "positions" | "relations"
    ) => void;
}

export const useRelationsController = ({ setFormValue }: Props) => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [options, setOptions] = useState<ApplicantIndividualCompanyRelation[]>([]);

    const { data } = useQuery<Query>(GET_RELATIONS);

    const itemsOptions = data?.applicantIndividualCompanyRelations?.data ?? [];

    const handleSubmit = (val: ApplicantIndividualCompanyRelation) => {
        setIsOpenModal(false)
        setOptions((prevState) => [...prevState, val]);
        setFormValue(val, 'relations')

    }

    return { itemsOptions, isOpenModal, options, handleSubmit, setIsOpenModal }
}