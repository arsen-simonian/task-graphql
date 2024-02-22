import { Button, TextField, Typography } from "@mui/material";
import { PositionsController } from "../PositionsController";
import { RelationsController } from "../RelationsController";
import { useMyForm } from "./useMyForm";
import { Controller } from "react-hook-form";

import S from "./styles";

export const MyForm = () => {
  const { handleSubmit, errors, onSubmit, control, setFormValue } = useMyForm();

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        My form
      </Typography>
      <S.MyFormWrapper>
        <S.ControllersWrapper>
          <RelationsController
            setFormValue={setFormValue}
            control={control}
            errors={errors}
          />
          <PositionsController
            setFormValue={setFormValue}
            control={control}
            errors={errors}
          />
        </S.ControllersWrapper>
        <Controller
          name="name"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ width: 620 }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ width: 620 }}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          )}
        />
        <S.SubmitButtonWrapper>
          <Button variant="contained" type="submit">
            Add
          </Button>
        </S.SubmitButtonWrapper>
      </S.MyFormWrapper>
    </S.Form>
  );
};
