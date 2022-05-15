import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      {/* Caries the Sementic Element with Them */}
      {/* Gutter Bottom give margin to bottom */}
      {/* use component to change the sementic of element */}
      <Typography variant="h2" gutterBottom>
        Typography in Material UI
      </Typography>
      <Typography variant="h1">Heading h1</Typography>
      <Typography variant="h2">Heading h2</Typography>
      <Typography variant="h3">Heading h3</Typography>
      <Typography variant="h4">Heading h4</Typography>
      <Typography variant="h5">Heading h5</Typography>
      <Typography variant="h6">Heading h6</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="h4" gutterBottom>
        Body Text in Material UI
      </Typography>

      {/* Body Text use variant as body1 and body2 */}
      {/* Render as Paragraph */}

      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis atque
        iusto ducimus non enim! Officiis illum quam ullam, ipsam quasi eligendi
        blanditiis dolorum, error alias rem magnam, repudiandae commodi tempore
        at nesciunt laborum exercitationem placeat dolore eum fugit molestias
        quisquam pariatur voluptatibus. Saepe culpa delectus suscipit maiores
        voluptatibus sit quisquam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolorum,
        delectus modi reprehenderit eveniet laborum doloremque harum doloribus
        dolores quam! Consectetur commodi excepturi non quisquam.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Can Change the Sementic
      </Typography>

      <Typography variant="h4" component="h2">
        This is an H2 Tag
      </Typography>
    </div>
  );
};

export default MuiTypography;
