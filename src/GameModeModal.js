import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: 'white',
  fontWeight:"bold", 
  backgroundColor: "#ffba46",
  border: '5px solid white',
  boxShadow: 24,
  padding: theme.spacing(2, 4, 3),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius * 7, // Added for rounded corners
}));

const GameModeModal = ({ open, handleClose, setGameMode }) => {
  const handleModeSelection = (mode) => {
    setGameMode(mode);
    handleClose(mode);
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose(null)}
      aria-labelledby="game-mode-modal-title"
      aria-describedby="game-mode-modal-description"
    >
      <ModalBox>
        <Typography variant="h4" id="game-mode-modal-title">
          Choose Game Mode
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: '10px' , fontWeight:'bold' , backgroundColor:"#00ffc1"}}
          onClick={() => handleModeSelection('single')}
        >
          Single Player
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: '10px' , fontWeight:'bold' , backgroundColor:"#9a8eff"}}
          onClick={() => handleModeSelection('multi')}
        >
          Multiplayer
        </Button>
      </ModalBox>
    </Modal>
  );
};

export default GameModeModal;
