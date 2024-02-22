import { Autocomplete, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

import S from "./styles";

interface Props {
  options: { name: string; id: string }[];
  label: string;
  name: string;
  control: FormControlType;
  errors: FormErrorsType;
  multiple?: boolean;
  width?: number;
  handleOpen: (val: boolean) => void;
}

export const CustomSelect = ({
  options,
  label,
  width = 300,
  name,
  control,
  errors,
  handleOpen,
  multiple,
}: Props) => {
  return (
    <S.CustomSelectWrapper>
      <Controller
        name={name}
        control={control}
        rules={{ required: "This field is required" }}
        render={({ field }) => {
          return (
            <Autocomplete
              {...field}
              multiple={multiple}
              disablePortal
              id="custom-select"
              options={options}
              sx={{ width }}
              onChange={(_, value) => field.onChange(value)}
              value={field.value || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={label}
                  error={!!errors[name]}
                  helperText={errors[name]?.message}
                />
              )}
              renderOption={(props, option) => {
                return props.id === "custom-select-option-0" ? (
                  <div key={option.id}>
                    <S.AddButtonWrapper>
                      <Button onClick={() => handleOpen(true)}>Add new</Button>
                    </S.AddButtonWrapper>
                    <li {...props}>{option.name}</li>
                  </div>
                ) : (
                  <li {...props} key={option.id}>
                    {option.name}
                  </li>
                );
              }}
              getOptionLabel={(option) => option.name || ""}
              noOptionsText={
                <S.AddButtonWrapper>
                  <Button onClick={() => handleOpen(true)}>Add new</Button>
                </S.AddButtonWrapper>
              }
            />
          );
        }}
      />
    </S.CustomSelectWrapper>
  );
};
