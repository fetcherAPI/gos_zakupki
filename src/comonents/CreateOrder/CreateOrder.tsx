import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "../../scss/global.module.scss";
import styles from "./CreateOrder.module.scss";
import {STEPS} from "./Steps";

function CreateOrder() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <div className={classes.header}>
                <p>{`кабинет`}</p>
                <h1>Настройки</h1>
            </div>

            <Box sx={{width: "100%"}}>
                <Stepper
                    activeStep={activeStep}
                    sx={{display: "flex", flexWrap: "wrap"}}
                >
                    {STEPS.map((el, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};

                        return (
                            <Step key={el.label} {...stepProps}>
                                <StepLabel {...labelProps}>{el.label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === STEPS.length ? (
                    <React.Fragment>
                        <Typography sx={{mt: 2, mb: 1}}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{display: "flex", flexDirection: "row", pt: 2}}>
                            <Box sx={{flex: "1 1 auto"}}/>
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <div className={styles.wrapper}>
                        {STEPS[activeStep].element}
                        <Box className={styles.footer}>
                            <Typography>
                                Шаг {activeStep + 1} из {STEPS.length}
                            </Typography>
                            <Button
                                color='inherit'
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{mr: 1}}
                            >
                                Back
                            </Button>
                            <Box/>
                            <Button onClick={handleNext}>
                                {activeStep === STEPS.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </Box>
                    </div>
                )}
            </Box>
        </div>
    );
}

export default CreateOrder;
