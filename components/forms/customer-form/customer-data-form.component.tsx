import { Stack } from "@mui/material";
import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledTextInput from "dh-marvel/components/controlled-text-input/ControlledTextInput.component";
import { personalDataSchema } from "./schema";
import StepperNavigation from "../stepper-navigation.component";
import { ICustomer } from "types/ICheckout.type";
import { PersonalData } from "types/IPersonalData.type";

export type CustomerDataProps = {
  data: ICustomer;
  activeStep: number;
  handleNext: (data: ICustomer) => void;
};

const CustomerDataForm: FC<CustomerDataProps> = ({
  data,
  activeStep,
  handleNext,
}: CustomerDataProps) => {
  const methods = useForm<PersonalData>({
    resolver: yupResolver(personalDataSchema),
    defaultValues: {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
    },
  });
  const { setFocus, handleSubmit } = methods;

  const onSubmit = (formData: PersonalData) => {
    handleNext({
      ...data,
      ...formData,
    });
  };

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <ControlledTextInput name="name" label="Nombre" />
          <ControlledTextInput name="lastname" label="Apellido" />
          <ControlledTextInput name="email" label="Email" />
        </FormProvider>
      </form>
      <StepperNavigation
        activeStep={activeStep}
        handleNext={handleSubmit(onSubmit)}
        handleBack={() => {}}
      />
    </Stack>
  );
};

export default CustomerDataForm;
