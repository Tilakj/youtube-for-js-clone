import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
export class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: ''
        }
    }
    handleChange = (event) => this.setState({ searchTerm: event.target.value })
    handleSubmit = (event) => {
        const { searchTerm } = this.state
        const { handleFormSubmit } = this.props
        handleFormSubmit(searchTerm)
        event.preventDefault()
    }
    clearText = () => {
        this.setState({ searchTerm: '' })
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        value={this.state.searchTerm}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={this.handleChange}
                    />
                    <ClearIcon style={{marginTop: '8px', cursor: 'pointer' }} onClick={this.clearText} />
                </form>
            </div>
        )
    }
}

export default SearchBar
