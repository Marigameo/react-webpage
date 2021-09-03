import React, { Component, PropTypes }    from 'react';
import Select from './src/Select2';
import { States } from './examples/States';
import { ExampleCreatable } from './examples/Creatable';
import { NumericSelect } from './examples/NumericSelect';
import { GithubUsers } from './examples/GitHubUsers';
import { Loader } from './examples/Loader';
import { CustomRenderSelect } from './examples/CustomRender';
import { MultiSelect } from './examples/MultiSelect';
import { DropUpSelect } from './examples/DropUp';

import './layout.less';
import './examples/example.css';


export const Layout = () => (
    <section className="b-layout b-layout-example">
      <div className="b-wrapper">
        <States />
      </div>
      <div className="b-wrapper">
        <Loader label="With Loading" />
      </div>
      <div className="b-wrapper">
        <ExampleCreatable label="Creatable" />
      </div>

      <div className="b-wrapper">
        <NumericSelect label="Numeric Values" />
      </div>

      <div className="b-wrapper">
        <GithubUsers label="Github users (Async with fetch.js)" />
      </div>

      <div className="b-wrapper">
        <CustomRenderSelect label="Custom Render Methods" />
      </div>

      <div className="b-wrapper">
        <MultiSelect label="Multiselect" />
      </div>
      <div className="b-wrapper">
        <DropUpSelect label="DropUp Select ( scroll )" />
      </div>
    </section>
);
