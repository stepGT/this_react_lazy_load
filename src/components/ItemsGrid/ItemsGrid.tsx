import styles from './ItemsGrid.module.css';

export interface IItemsGrid {
  data: string[];
}

const ItemsGrid = (props: IItemsGrid) => {
  return (
    <div className={styles.container}>
      {props.data.map((item, ix) => {
        return (
          <div key={ix} className={styles.item}>
            <img src={item} />
          </div>
        )
      })}
    </div>
  )
}

export default ItemsGrid