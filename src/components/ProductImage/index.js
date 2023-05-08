import styled from 'styled-components'

export const ImageProduct = styled.img`
    width: ${props => props.widthImg || '100%'};
    height: ${props => props.heigthImg || '400px'};
    border-bottom: ${props => props.border || 'none'}
`