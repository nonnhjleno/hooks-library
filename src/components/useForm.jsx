import React from "react";
import { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

const FormFunc = () => {

    const count = 3;

    let initialValue = [];

    for (let i = 0; i < count; i++) {
        initialValue = [...initialValue, { name: "", age: "" }];
    }

    const { control, handleSubmit } = useForm({
        defaultValues: {
            people: [...initialValue]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "people",
    });

    const [formCount, setFormCount] = useState(fields.length); // フォームの数を保存する状態変数

    const onSubmit = (data) => {
        console.log(data);
        console.log(fields);
    };

    const addForm = () => {
        append({ name: "", age: "" });
        setFormCount(formCount + 1); // フォームを追加したらフォームの数を更新
    };

    const deleteForm = (index) => {
        remove(index);
        setFormCount(formCount - 1); // フォームを削除したらフォームの数を更新
    };

    return (
        <div className="border-black">
            <form onSubmit={handleSubmit(onSubmit)}>
                <button className="border-2" type="button" onClick={addForm}>
                    追加
                </button>
                {fields.map((item, index) => (
                    <div key={uuidv4()}>
                        <Controller
                            name={`people[${index}].name`}
                            control={control}
                            render={({ field }) => <input {...field} placeholder="名前" className="border-2 mx-2" />}
                        />
                        <Controller
                            name={`people[${index}].age`}
                            control={control}
                            render={({ field }) => <input {...field} placeholder="年齢" className="border-2 mx-2" />}
                        />
                        <button type="button" onClick={() => deleteForm(index)}>
                            削除
                        </button>
                    </div>
                ))}
                <button type="submit">送信</button>
            </form>
            <p>フォームの数: {formCount}</p>
        </div>
    );
};

export default FormFunc;
