import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

import { CopyToClipboard } from "react-copy-to-clipboard";

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  state = {
    value: "dddddd",
    copied: false
  };
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        {/* <h1>React Tutorial</h1>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
        <span>12123454457878</span> <button>复制</button>
        <CopyToClipboard
          text={this.state.value}
          onCopy={() => this.setState({ copied: true })}
        >
          <span>哒哒哒哒哒哒</span>
        </CopyToClipboard> */}

        <div>
          <span
            // value={this.state.value}
            onChange={({ target: { value } }) =>
              this.setState({ value, copied: false })
            }
          >
            {this.state.value}
          </span>

          <CopyToClipboard
            text={this.state.value}
            onCopy={() => this.setState({ copied: true })}
          >
            <span>复制到剪贴板与跨度</span>
          </CopyToClipboard>

          <CopyToClipboard
            text={this.state.value}
            onCopy={() => this.setState({ copied: true })}
          >
            <button>Copy to clipboard with button</button>
          </CopyToClipboard>

          {this.state.copied ? (
            <span style={{ color: "red" }}>Copied.</span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
