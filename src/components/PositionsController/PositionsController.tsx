import { AddNewItemModal } from "../AddNewItemModal";
import { usePositionsController } from "./usePositionsController";
import { CustomSelect } from "../CustomSelect";

import S from "./styles";

interface Props {
  control: FormControlType;
  errors: FormErrorsType;
  setFormValue: (
    val: ControllerInputType,
    input: "positions" | "relations"
  ) => void;
}

export const PositionsController = ({
  control,
  errors,
  setFormValue,
}: Props) => {
  const { options, setIsOpenModal, itemsOptions, isOpenModal, handleSubmit } =
    usePositionsController({ setFormValue });

  return (
    <>
      <S.PositionsControllersWrapper>
        <CustomSelect
          label="Positions"
          options={options}
          name="positions"
          control={control}
          errors={errors}
          handleOpen={setIsOpenModal}
        />
      </S.PositionsControllersWrapper>
      <AddNewItemModal
        options={itemsOptions}
        isOpen={isOpenModal}
        handleOpen={setIsOpenModal}
        label="Add Positions"
        handleSubmit={handleSubmit}
      />
    </>
  );
};
