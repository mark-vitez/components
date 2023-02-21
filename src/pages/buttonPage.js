import Button from "../components/button/button"

function ButtonPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Button Page! Click around ;)
            </h1>
            <span>
                <Button>Hello there</Button>
            </span>
            <span>
                <Button primary>Hello there</Button>
            </span>
            <span>
                <Button secodary>Hello there</Button>
            </span>
            <span>
                <Button success>Hello there</Button>
            </span>
            <span>
                <Button warning>Hello there</Button>
            </span>
            <span>
                <Button danger>Hello there</Button>
            </span>
            <br />
            <span>
                <Button rounded>Hello there</Button>
            </span>
            <span>
                <Button primary rounded>Hello there</Button>
            </span>
            <span>
                <Button secodary rounded>Hello there</Button>
            </span>
            <span>
                <Button success rounded>Hello there</Button>
            </span>
            <span>
                <Button warning rounded>Hello there</Button>
            </span>
            <span>
                <Button danger rounded>Hello there</Button>
            </span>
            <br />
            <span>
                <Button outline>Hello there</Button>
            </span>
            <span>
                <Button primary outline>Hello there</Button>
            </span>
            <span>
                <Button secodary outline>Hello there</Button>
            </span>
            <span>
                <Button success outline>Hello there</Button>
            </span>
            <span>
                <Button warning outline>Hello there</Button>
            </span>
            <span>
                <Button danger outline>Hello there</Button>
            </span>
            <br />
            <span>
                <Button rounded outline>Hello there</Button>
            </span>
            <span>
                <Button primary rounded outline>Hello there</Button>
            </span>
            <span>
                <Button secodary rounded outline>Hello there</Button>
            </span>
            <span>
                <Button success rounded outline>Hello there</Button>
            </span>
            <span>
                <Button warning rounded outline>Hello there</Button>
            </span>
            <span>
                <Button danger rounded outline>Hello there</Button>
            </span>
        </div>
    )
}

export default ButtonPage