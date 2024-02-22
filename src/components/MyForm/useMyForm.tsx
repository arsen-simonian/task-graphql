import { useForm, SubmitHandler } from "react-hook-form";

export const useMyForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const setFormValue = (
    val: ControllerInputType,
    input: "positions" | "relations"
  ) => {
    if (input === "relations") {
      setValue(input, [val, ...(getValues("relations") || [])]);
    } else {
      setValue(input, val);
    }
  };

  return { onSubmit, control, handleSubmit, errors, setFormValue };
};
