import {
  MagButton,
  MagSelect,
  MagSelectOption,
  MagTextField,
} from "@magnolui/react";
import { useState, type FormEvent } from "react";

export const App = () => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className="grid m-auto w-full">
      <div className="w-[300px] flex flex-col p-4 gap-10 mx-auto">
        <h1>Magnolui</h1>

        <div className="flex gap-2 items-end">
          <MagTextField
            id="field"
            name="field"
            label="E-mail"
            placeholder="Digite seu e-mail"
          />
          <MagButton>Enviar</MagButton>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <MagSelect
              placeholder="Selecione uma opção"
              value={selectedOption}
              name="select"
              id="select"
              onChange={(value) => setSelectedOption(value)}
            >
              <MagSelectOption value="option1" className="truncate w-full">
                Opção fasd fasdf sadf asdfsdafsadfasd fasdf dsaf sd 1
              </MagSelectOption>
              <MagSelectOption value="option2">Opção 2</MagSelectOption>
              <MagSelectOption value="option3" disabled>
                Opção 3
              </MagSelectOption>
            </MagSelect>

            <MagButton buttonType="submit">Enviar</MagButton>
          </div>

          <p className="mt-4">Opção selecionada: {selectedOption}</p>

          <ul>
            <li>option1</li>
          </ul>
        </form>
      </div>
    </div>
  );
};
