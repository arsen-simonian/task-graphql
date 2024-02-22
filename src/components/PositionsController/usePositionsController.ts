import { useQuery } from "@apollo/client";
import { Query } from "../../data-loaders/graphql-loaders";
import { GET_POSITIONS } from "../../graphql";
import { useState } from "react";
import { ApplicantIndividualCompanyPosition } from "../../types/graphql-types";

interface Props {
    setFormValue: (
        val: ControllerInputType,
        input: "positions" | "relations"
    ) => void;
}

export const usePositionsController = ({ setFormValue }: Props) => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [options, setOptions] = useState<ApplicantIndividualCompanyPosition[]>([]);

    const { data } = useQuery<Query>(GET_POSITIONS);
    const itemsOptions = data?.applicantIndividualCompanyPositions?.data ?? [];

    const handleSubmit = (val: ApplicantIndividualCompanyPosition) => {
        setIsOpenModal(false);
        setOptions((prevState) => [...prevState, val]);
        setFormValue(val, 'positions')
    }

    return {
        isOpenModal,
        itemsOptions,
        options,
        setIsOpenModal,
        handleSubmit,
    }
}