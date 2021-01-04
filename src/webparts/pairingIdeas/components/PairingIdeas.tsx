import * as React from 'react';
import styles from './PairingIdeas.module.scss';
import { IPairingIdeasProps } from './IPairingIdeasProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class PairingIdeas extends React.Component<IPairingIdeasProps, {}> {
  public render(): React.ReactElement<IPairingIdeasProps> {
    return (
      <div className={ styles.pairingIdeas }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
