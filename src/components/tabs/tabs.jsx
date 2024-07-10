import styles from './tabs.module.scss';
import classnames from 'classnames';

const Tabs = ({ tabs, active, setActive }) => {

  const activeClass = (tab) => tab?.id === active?.id && styles.active;
  return (
    <div>
      <ul className={classnames(styles.tabs)}>
        {tabs?.map((tab) => (
          <li
            key={tab.id}
            className={classnames(
              styles.tabs__item,
              activeClass(tab)
            )}
          >
            <button
              type="button"
              onClick={() => {
                setActive(tab);
              }}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
