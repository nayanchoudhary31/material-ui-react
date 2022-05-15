import {
  Button,
  Typography,
  Stack,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import BluetoothIcon from "@mui/icons-material/Bluetooth";

const MuiButtons = () => {
  return (
    <Stack spacing={4}>
      <Typography variant="h3" gutterBottom>
        Material UI Buttons
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://www.google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Typography variant="h6" gutterBottom>
        MUI Color Buttons Contained Version
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
      </Stack>
      <Typography variant="h6" gutterBottom>
        MUI Color Buttons Outlined Version Version
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Typography variant="h6" gutterBottom>
        MUI Color Buttons Outlined Version
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={4} direction="row">
        <Typography variant="h6" gutterBottom>
          MUI Different Size Button
        </Typography>
        <Button variant="contained" size="small">
          Small Button
        </Button>
        <Button variant="contained" size="medium">
          Medium Button
        </Button>
        <Button variant="contained" size="large">
          Large Button
        </Button>
      </Stack>
      <Stack spacing={4} direction="row">
        <Typography variant="h6">Button Icons</Typography>
        <Button
          variant="contained"
          startIcon={<BluetoothIcon />}
          disableElevation
        >
          Before End
        </Button>
        <Button variant="contained" endIcon={<BluetoothIcon />} disableRipple>
          After End
        </Button>
        <IconButton
          aria-label="bluetooth"
          color="success"
          size="medium"
          onClick={() => alert("Clicked....")}
        >
          <BluetoothIcon />
        </IconButton>
      </Stack>

      <Typography variant="h6" gutterBottom>
        Button Group Used to Group Button in MUI
      </Typography>

      <Stack direction="row">
        <ButtonGroup variant="contained" color='warning' size="large">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButtons;
