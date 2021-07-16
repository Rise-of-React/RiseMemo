import {
  createStyles,
  Grid,
  makeStyles,
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { StepOne } from '../Atoms/Steps/StepOne';
import { StepThree } from '../Atoms/Steps/StepThree';
import { StepTwo } from '../Atoms/Steps/StepTwo';
import { CustomButton } from '../Atoms/CustomButton';

export interface CalenderStepperProps {
  steps: string[];
  onClose?: () => void;
  onComplete?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    StepArea: {
      width: 819,
      backgroundColor: theme.palette.primary.main,
    },
    step: {
      color: theme.palette.primary.dark,
      '& .MuiStepIcon-completed': {
        color: theme.palette.primary.dark,
      },
      '& .MuiStepIcon-active': {
        color: theme.palette.primary.dark,
      },
    },
    stepIcon: {
      color: theme.palette.primary.dark,
    },
    stepIconText: {
      color: theme.palette.text.primary,
    },
  })
);

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <StepThree />;
    default:
      return 'Unknown Step';
  }
};

export const CalenderStepper = (props: CalenderStepperProps) => {
  const classes = useStyles();
  const { steps, onClose, onComplete } = props;
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = React.useCallback(
    (isNext) => {
      setActiveStep((prev) => (isNext ? prev + 1 : prev - 1));
    },
    [setActiveStep]
  );

  return (
    <Stepper activeStep={activeStep} orientation="vertical" className={classes.StepArea}>
      {steps.map((label, index) => (
        <Step key={label}>
          <StepButton
            classes={{
              root: classes.step,
            }}
          >
            <StepLabel>{label}</StepLabel>
          </StepButton>
          <StepContent>{getStepContent(index)}</StepContent>
        </Step>
      ))}
      <Grid container>
        <Grid item xs={6} style={{ padding: 15 }}>
          <CustomButton
            label={activeStep === 0 ? 'Cancel' : 'Back'}
            isIcon={false}
            onClick={() => {
              if (activeStep === 0) {
                onClose && onClose();
              } else {
                handleStep(false);
              }
            }}
            width={'100%'}
          />
        </Grid>
        <Grid item xs={6} style={{ padding: 15 }}>
          <CustomButton
            label={activeStep === steps.length - 1 ? 'Complete' : 'Next'}
            isIcon={false}
            onClick={() => {
              if (activeStep === steps.length - 1) {
                onComplete && onComplete();
              } else {
                handleStep(true);
              }
            }}
            width={'100%'}
          />
        </Grid>
      </Grid>
    </Stepper>
  );
};

CalenderStepper.defaultProps = {
  steps: ['Make Title', 'Choose Date', 'Check Information'],
};
