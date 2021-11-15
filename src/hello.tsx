import React from 'react';

interface Props {
    name: string,
    sex: string,
    age: number
}

interface State {
    name: string,
    sex: string,
    age: number
}


class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {...this.props}
    }

    public static defaultProps: Props = {
        name: "string",
        sex: "string",
        age: 0
    }

    public render() {
        const {name, age, sex} = this.state
        return (
            <>
                <ul>
                    <li>姓名：{name}</li>
                    <li>性别：{sex}</li>
                    <li>年龄：{age}</li>
                </ul>
                <button onClick={this.changAge}>
                    年龄+1
                </button>
                <hr/>
            </>
        )
    }

    public changAge = (): void => {
        let age: number = this.state.age
        this.setState({age: age + 1})
    }
}

export default Hello;
