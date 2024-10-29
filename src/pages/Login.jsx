import { useForm } from "react-hook-form"
import { Card } from "../components/ui/Card"

function Login() {
    const form = useForm();

    async function formOnSubmit(data) {
        console.log('formulário enviado')
    }

    return (
        <div className="">
            <Card>
                <form onSubmit={form.handleSubmit(formOnSubmit)}>
                    <button type="submit">
                        Entrar
                    </button>
                </form>
            </Card>
        </div>
    )
}

export default Login