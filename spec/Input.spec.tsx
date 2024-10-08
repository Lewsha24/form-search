import {screen, render,} from "@testing-library/react";
import {Input} from "../src/components/input";
import uE from "@testing-library/user-event";
describe("Поле ввода", () => {
    it.todo("огранечение на ввод более 32 символов");

    it("Поле ввода", async () => {
        const userEvent = uE.setup({delay: 100})
        const fn = jest.fn()

        render(<Input defaultValue="" onChange={fn}/>)
        // Находим элемент
        const input = screen.getByRole("textbox");

        await userEvent.type(input, 'Hello')

        expect(fn).toBeCalledWith('Hello');
    });
});


