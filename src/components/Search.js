import React, { useState } from 'react'

import style from '../styles/Search.module.css'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'

function Search({ placeholder, data }) {
  const [filterData, setFilterData] = useState([])
  const [enteredWord, setEnteredWord] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setEnteredWord(searchWord)
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setFilterData([])
    } else {
      setFilterData(newFilter)
    }
  }

  const clearInput = () => {
    setFilterData([])
    setEnteredWord('')
  }

  return (
    <div className={style.search}>
      <div className={style.searchInputs}>
        <input
          type='text'
          placeholder={placeholder}
          value={enteredWord}
          onChange={handleFilter}
        />
        <div className={style.searchIcon}>
          {filterData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id={style.clearBtn} onClick={clearInput} />
          )}
        </div>
      </div>
      {filterData.length !== 0 && (
        <div className='result'>
          {filterData.slice(0, 20).map((val, key) => {
            return (
              <a className={style.dataItem} href={val.link} key={key}>
                <p>{val.name}</p>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Search
