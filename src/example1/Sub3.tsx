import { z, ZodError } from "zod";
import { Formik, type FormikProps } from "formik";
import { Input } from "./input-after/Input";
import { Message } from "./input-after/Message";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(10),
});

type FormValues = z.infer<typeof schema>;

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

type ValidateReturn = Partial<Record<keyof FormValues, string | string[]>>;

function validate(values: FormValues): ValidateReturn {
  try {
    schema.parse(values);
  } catch (error) {
    if (error instanceof ZodError) {
      return error.flatten().fieldErrors;
    }
  }

  return {};
}

export function Sub3() {
  const renderForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }: FormikProps<FormValues>) => {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          label="First name"
          id="firstName"
          type="firstName"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          message={
            touched.firstName && errors.firstName ? (
              <Message message={errors.firstName} />
            ) : null
          }
        />
        <Input
          label="Last name"
          id="lastName"
          type="lastName"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          message={
            touched.lastName && errors.lastName ? (
              <Message message={errors.lastName} />
            ) : null
          }
        />
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          message={
            touched.email && errors.email ? (
              <Message message={errors.email} />
            ) : null
          }
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          message={
            touched.password && errors.password ? (
              <Message message={errors.password} />
            ) : null
          }
        />
        <button
          type="submit"
          className="rounded border-2 border-gray-400 p-2 text-xl"
        >
          Submit
        </button>
      </form>
    );
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={() => console.log("submit")}
      >
        {renderForm}
      </Formik>
    </div>
  );
}
