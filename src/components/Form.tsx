import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

type FormItem = {
  title?: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
};

type Props = {
  onSubmit: (value: any) => void;
  items: FormItem[];
};

export default function Form({ onSubmit, items }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const renderFormItem = () => {
    return items.map((item: any, i: number) => (
      <div className="w-full mb-6" key={i}>
        <h4 className="text-black text-base font-semibold mb-1">
          {item.title}
        </h4>
        <Input
          placeholder={item?.placeholder || `Enter ${item.title}...`}
          defaultValue={item.defaultValue}
          props={{ ...register(item.name, { required: item.required }) }}
        />
        {errors[item.name] && (
          <span className="text-xs font-normal text-red-500">
            This field is required
          </span>
        )}
      </div>
    ));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {renderFormItem()}
      <Button className="mt-2 w-full" props={{ type: "submit" }}>
        Submit
      </Button>
    </form>
  );
}
