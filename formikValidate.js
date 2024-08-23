 const validate = (values: { prompt: string }) => {
    // The onSubmit() of Formik will be executed only if there are no errors.
    // if ERROR OBJECT matches shape to values/initialValues (Ex: const initialValues = { prompt: "" }) of Formik, it will be error.
    // if different shape, it means NO ERROR. So {} means NO ERROR
    if (values.prompt.trim() === "") {
      return {
        prompt: new Error("Prompt cannot be empty"),
      };
    }
  };
