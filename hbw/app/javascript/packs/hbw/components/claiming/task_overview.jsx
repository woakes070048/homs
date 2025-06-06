import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Priority from 'shared/element/priority';
import TranslationContext from 'shared/context/translation';

const HBWClaimingTaskOverview = ({
  assigned, entityUrl, task, claim
}) => {
  const { translate: t, translateBP, Localizer } = useContext(TranslationContext);

  const goToTask = () => { window.location.href = entityUrl; };

  const claimAndGo = async () => {
    await claim(task);
    goToTask();
  };

  const taskLabel = translateBP(`${task.process_key}.${task.key}.label`, {}, task.name);
  const processLabel = translateBP(`${task.process_key}.label`, {}, task.process_name);

  return (
    <div data-test="task-overview" className="task-overview">
      <div className="header">
        {t('components.claiming.overview.header')}
      </div>
      <div className="title">
        <a data-test="title-link" href={entityUrl}>
          {task.icon && <FontAwesomeIcon icon={task.icon}/>}
          {processLabel} — {taskLabel}
        </a>
      </div>
      <table className="two-cols">
        <tbody>
          {task.due && (
            <tr>
              <td data-test="due-date-label">{t('components.claiming.overview.due')}</td>
              <td data-test="due-date-value">{Localizer.localizeDatetime(task.due)}</td>
            </tr>
          )}
          <tr>
            <td data-test="created-date-label">{t('components.claiming.overview.created')}</td>
            <td data-test="created-date-value">{Localizer.localizeDatetime(task.created)}</td>
          </tr>
          <tr>
            <td data-test="priority-label">{t('components.claiming.overview.priority')}</td>
            <td data-test="priority-value"><Priority priority={task.priority} /></td>
          </tr>
        </tbody>
      </table>
      {task.description && (
        <>
          <div data-test="description-label" className="bold">{t('components.claiming.overview.description')}</div>
          <div data-test="description-value" className="description">{task.description}</div>
        </>
      )}
      <div className="buttons">
        {assigned && (
          <button onClick={goToTask}
                  className='btn btn-default'>{t('components.claiming.overview.go_to_task')}
          </button>
        )}
        {!assigned && (
          <>
            <button onClick={() => claim(task)}
                    className='btn btn-primary'>{t('components.claiming.overview.claim_task')}
            </button>
            <button onClick={claimAndGo}
                    className='btn btn-default'>{t('components.claiming.overview.claim_and_open')}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

HBWClaimingTaskOverview.propTypes = {
  assigned:  PropTypes.bool.isRequired,
  entityUrl: PropTypes.string.isRequired,
  task:      PropTypes.shape({
    id:           PropTypes.string.isRequired,
    key:          PropTypes.string.isRequired,
    process_key:  PropTypes.string.isRequired,
    priority:     PropTypes.number.isRequired,
    name:         PropTypes.string.isRequired,
    created:      PropTypes.string.isRequired,
    process_name: PropTypes.string.isRequired,
    icon:         PropTypes.arrayOf(PropTypes.string),
    due:          PropTypes.string,
    description:  PropTypes.string,
  }).isRequired,
  claim: PropTypes.func.isRequired,
};

export default HBWClaimingTaskOverview;
