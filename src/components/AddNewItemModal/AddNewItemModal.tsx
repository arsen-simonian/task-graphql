import { Autocomplete, Button, Modal, TextField } from "@mui/material";
import { useAddNewItemModal } from "./useAddNewItemModal";

import S from "./styles";

interface Props {
  isOpen: boolean;
  handleOpen: (val: boolean) => void;
  options: ControllerInputType[];
  label: string;
  handleSubmit: (val: ControllerInputType) => void;
}

export const AddNewItemModal = ({
  isOpen,
  handleOpen,
  options,
  label,
  handleSubmit,
}: Props) => {
  const { selected, setSelected } = useAddNewItemModal(isOpen);

  return (
    <Modal
      open={isOpen}
      onClose={() => handleOpen(false)}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <S.ModalBody>
        <Autocomplete
          disablePortal
          autoHighlight
          id="custom-select"
          options={options}
          onChange={(_, val) => setSelected(val)}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{ ...params.inputProps, tabIndex: 1 }}
              label={label}
            />
          )}
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.name}
            </li>
          )}
          getOptionLabel={(option) => option.name || ""}
        />
        <S.ButtonsWrapper>
          <Button
            variant="contained"
            onClick={() => {
              selected && handleSubmit(selected);
            }}
            disabled={!selected}
          >
            Add
          </Button>
          <Button onClick={() => handleOpen(false)} variant="contained">
            Cancel
          </Button>
        </S.ButtonsWrapper>
      </S.ModalBody>
    </Modal>
  );
};
