import React, { FC } from 'react'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'
import { Button, Input } from '../../../components'

interface LoginFormProps {
  methods: UseFormReturn<FieldValues>
  onSubmit: (data: FieldValues) => void
}

const LoginForm: FC<LoginFormProps> = ({ methods, onSubmit }) => {
  const { isSubmitting, isValid, isSubmitSuccessful } = methods.formState

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {isSubmitSuccessful ? (
            <div>Login Successful. Redirecting...</div>
          ) : (
            <>
              <Input
                label="Email"
                name="email"
                placeholder="Email"
              />
              <Input
                label="Password"
                name="password"
                placeholder="Password"
              />
            </>
          )}
          <Button
            isSubmitting={isSubmitting}
            isValid={isValid}
          />
        </form>
      </FormProvider>
    </>
  )
}

export default LoginForm
