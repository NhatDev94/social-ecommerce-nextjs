import Input from "./Input";
import Button from "./Button";

type Item = {
  label: string;
  name: string;
  required?: string;
  type?: string;
};

type Props = {
  form: any;
  onSubmit: (value: any) => void;
  items: Item[];
};

export default function Form({ form, onSubmit, items }: Props) {
  return (
    <form onSubmit={form.handleSubmit((value: any) => onSubmit(value))}>
      {items.map((item: Item, i: number) => (
        <div className="w-full mb-6" key={i}>
          <Input
            label={item.label}
            register={form.register}
            name={item.name}
            type={item.type}
            options={{ required: item.required }}
            error={Boolean(form.formState.errors[item.name])}
            helperText={
              form.formState.errors[item.name]
                ? form.formState.errors[item.name]?.message
                : ""
            }
          />
        </div>
      ))}
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        className="mt-4"
      >
        Submit
      </Button>
    </form>
  );
}
