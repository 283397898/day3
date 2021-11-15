import React, {LegacyRef} from 'react';
import './App.css';
import Hello from "./hello";

class App extends React.Component<{}, {}> {
    public inputValue1: any = React.createRef()
    public inputValue2: any
    public inputValue3: any
    public state = {
        inputValue1: '',
        inputValue2: '',
        inputValue3: ''
    }

    public render() {
        const data = {
            name: '老王',
            sex: '男',
            age: 30
        }
        return (
            <>
                <Hello {...data} />
                <Hello name="老胡"/>
                {/*创建dom对象*/}
                <input type="text" ref={this.inputValue1} onInput={this.changeInput1}/>
                <span className={'show'}>{this.state.inputValue1}</span>
                <hr/>
                {/*回调返回dom，方法1：内联函数式*/}
                <input
                    type="text"
                    ref={(element: HTMLInputElement) => this.inputValue2 = element}
                    onInput={this.changeInput2}
                />
                <span className={'show'}>{this.state.inputValue2}</span>
                <hr/>
                {/*回调返回dom，方法2：绑定方法式*/}
                <input
                    type="text"
                    ref={this.severInput}
                    onInput={this.changeInput3}
                />
                <span className={'show'}>{this.state.inputValue3}</span>
                <hr/>
            </>
        )
    }

    changeInput1 = () => {
        const value: string = this.inputValue1.current.value
        this.setState({inputValue1: value})
    }
    changeInput2 = () => {
        const value: string = this.inputValue2.value
        this.setState({inputValue2: value})
    }
    severInput = (cn: HTMLInputElement) => {
        this.inputValue3 = cn
    }
    changeInput3 = () => {
        const value: string = this.inputValue3.value
        this.setState({inputValue3: value})
    }
}

export default App;
