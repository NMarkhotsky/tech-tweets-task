/* eslint-disable react/prop-types */
import { useState } from 'react';
import { statusFilters } from '../../utils/constants';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Main,
} from './CardFilter.styled';
import { BsFilterLeft } from 'react-icons/bs';

export const CardFilter = ({ handleFilterChange, resetPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          Filter <BsFilterLeft />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {statusFilters.map(el => (
                <ListItem
                  key={Math.random()}
                  type="button"
                  onClick={() => {
                    handleFilterChange(el);
                    setIsOpen(false);
                    resetPage(1);
                  }}
                >
                  {el}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};
