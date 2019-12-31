import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

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

    render() {
        const {classes} = this.props
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
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={this.handleChange}
                    />
                     
                </form>
            </div>
        )
    }
}

export default SearchBar
