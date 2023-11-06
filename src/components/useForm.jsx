import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

const FormFunc = () => {
    const { control, handleSubmit } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "people",
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="border-black">
            <form onSubmit={handleSubmit(onSubmit)}>
                <button className=" border-2" type="button" onClick={() => append({ name: "", age: "" })}>
                    追加
                </button>
                {fields.map((item, index) => (
                    <div key={uuidv4()}>
                        <Controller
                            name={`people[${index}].name`}
                            control={control}
                            defaultValue={item.name}
                            render={({ field }) => <input {...field} placeholder="名前" className="border-2 mx-2"/>}
                        />
                        <Controller
                            name={`people[${index}].age`}
                            control={control}
                            defaultValue={item.age}
                            render={({ field }) => <input {...field} placeholder="年齢" className="border-2 mx-2"/>}
                        />
                        <button type="button" onClick={() => remove(index)}>
                            削除
                        </button>
                    </div>
                ))}
                <button type="submit">送信</button>
            </form>
        </div>
    );
};

export default FormFunc;
