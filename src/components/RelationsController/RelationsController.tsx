import { AddNewItemModal } from "../AddNewItemModal";
import { useRelationsController } from "./useRelationsController";
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

export const RelationsController = ({
  control,
  errors,
  setFormValue,
}: Props) => {
  const { itemsOptions, isOpenModal, setIsOpenModal, handleSubmit, options } =
    useRelationsController({ setFormValue });

  return (
    <>
      <S.RelationsControllersWrapper>
        <CustomSelect
          label="Relations"
          options={options}
          name="relations"
          control={control}
          errors={errors}
          handleOpen={setIsOpenModal}
          multiple
        />
      </S.RelationsControllersWrapper>
      <AddNewItemModal
        isOpen={isOpenModal}
        handleOpen={setIsOpenModal}
        options={itemsOptions}
        label="Add Relations"
        handleSubmit={handleSubmit}
      />
    </>
  );
};
