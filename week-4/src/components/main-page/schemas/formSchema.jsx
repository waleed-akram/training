import * as z from "zod";

const formSchema = z.object({
  id: z.number(),
  title: z
    .string()
    .max(12, "Title cannot be more than 12 Characters!")
    .nonempty("Title is required!"),
  tasks: z
    .array(
      z.object({
        task: z.string().nonempty("Task body cannot be empty!"),
        completed: z.boolean().default(false),
      })
    )
    .min(1, "Tasks cannot be empty!"),
});

// export {formSchema};
export default formSchema;
