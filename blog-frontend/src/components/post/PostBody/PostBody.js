import React from 'react';
import Styles from './PostBody.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(Styles);

const PostBody = ({body}) => {
  return (
    <div className={cx('post-body')}> 
      <div className={cx('paper')}>
        <MarkdownRender markdown={body}/>
      </div>
    </div>
  );
};

export default PostBody;