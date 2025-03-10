import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  // SelectComponent,
  // RatingComponent,
} from '#common/components';
// import { Lookup } from '#common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
// import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { cardImage, characterCardContent, customMUITextField, editLabel } from './character.styles';
import * as classes from './character.styles';
import { inputBestSentence } from './character.styles';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
    >
      {() => (
        <div>
          <Card>
            <CardContent className={characterCardContent}>
              <div>
                <CardMedia
                  image={character.image}
                  title={character.name}
                  className={cardImage}
                />
              </div>
              <div>
                <Typography variant='h5' gutterBottom sx={{ color: 'text.secondary' }}>
                  {character.name}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  Gender: {character.gender}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  Species: {character.species}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  Origin: {character.origin.name}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  Status: {character.status}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  Location: {character.location.name}
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Form className={classes.root}>
            <label htmlFor="bestSentence" className={editLabel}>Edita su mejor frase</label>
            <TextFieldComponent
              name="bestSentence"
              multiline={true}
              rows={3}
              className={customMUITextField}
              sx={{
                "& .css-16bevx5-MuiFormControl-root-MuiTextField-root": {
                  marginTop: '0px !important',
                }
              }}
            />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Form>
        </div>

      )}
    </Formik>
  );
};
