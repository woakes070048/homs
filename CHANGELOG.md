v2.9 [Unreleased]
### Features
- [#706](https://github.com/hydra-billing/homs/pull/706) Update Ruby to 3.2.2.
- [#725](https://github.com/hydra-billing/homs/pull/725) Update Rails to 7.
- [#726](https://github.com/hydra-billing/homs/pull/726) Add services select table.
- [#729](https://github.com/hydra-billing/homs/pull/729) Add services select table search option.
- [#732](https://github.com/hydra-billing/homs/pull/732) Allow to localize select field options.

  It is possible to set translations for select field options. For example, if have this in the form config:
  ```
    fields:
      - name: selectField
        type: select
        label: Select field
        choices:
          - Option1
  ```
  you can set translations in `locales/bp/ru.my_process.yml`:
  ```
    selectField:
      label: Выпадающий список
      options:
        - Опция1
  ```
  or if you have it this way:
  ```
    fields:
      - name: selectField
        type: select
        label: Select field
        choices:
          - [option_1, 'Really long first option']
  ```
  you can do it similarly:
  ```
    selectField:
      label: Выпадающий список
      options:
        - [option_1, 'Очень длинная первая опция']
  ```
- [#731](https://github.com/hydra-billing/homs/pull/731) Add columns display management option.
- [#738](https://github.com/hydra-billing/homs/pull/738) Add services select table service add option.
- [#750](https://github.com/hydra-billing/homs/pull/750) Support fr locale.
- [#753](https://github.com/hydra-billing/homs/pull/753) Turn BPM config to a list.
- [#755](https://github.com/hydra-billing/homs/pull/755) Expect a process definition key in a task notification.
- [#758](https://github.com/hydra-billing/homs/pull/758) Support different BPM backends for different process types.


-------------------
### Breaking changes
- [#719](https://github.com/hydra-billing/homs/pull/719) Use REDIS_HOST and REDIS_PORT env variables instead of REDIS_URL for actioncable.

v2.8.13 [2024-11-19]
-------------------
### Breaking changes
- [#753](https://github.com/hydra-billing/homs/pull/753) Turn BPM config to a list.

### Features
- [#757](https://github.com/hydra-billing/homs/pull/757) Allow to localize description for BP form fields.
- [#755](https://github.com/hydra-billing/homs/pull/755) Expect a process definition key in a task notification.
- [#758](https://github.com/hydra-billing/homs/pull/758) Support different BPM backends for different process types.

v2.8.11 [2024-08-12]
-------------------
### Features
- [#750](https://github.com/hydra-billing/homs/pull/750) Support fr locale.

v2.8.10 [2024-04-04]
-------------------
### Bugfixes
- [#742](https://github.com/hydra-billing/homs/pull/742) Allow to change starter groups and starter users for business process without reloading HOMS
- [#748](https://github.com/hydra-billing/homs/pull/748) Return false expired in case if due is null

v2.8.8 [2023-10-30]
-------------------
### Features
- [#726](https://github.com/hydra-billing/homs/pull/726/) Add services select table.

v2.8.7 [2023-10-10]
-------------------
### Refactoring
- [#727](https://github.com/hydra-billing/homs/pull/727) Use the latest minio version for testing and development, use [RELEASE.2023-09-30T07-02-29Z](https://github.com/minio/minio/releases/tag/RELEASE.2023-09-30T07-02-29Z) for stable HOMS version.

v2.8.5 [2023-08-22]
-------------------
### Bugfixes
- [#715](https://github.com/hydra-billing/homs/pull/715) Set auth_header in Events::TasksController

v2.8.4 [2023-08-16]
-------------------
### Features
- [#714](https://github.com/hydra-billing/homs/pull/714/files) Localize select-table header.

v2.8.3 [2023-07-28]
-------------------
### Refactoring
- [#712](https://github.com/hydra-billing/homs/pull/712) Log SSO authentication errors with stacktrace.

v2.8.0 [2023-03-07]
-------------------
### Breaking changes
- [#665](https://github.com/hydra-billing/homs/pull/665) Add tooltip message translation for string field.
- [#666](https://github.com/hydra-billing/homs/pull/666) Add translation for file upload field.

- BP localization config structure was changed. Now input labels for the next field types should be placed in key "label": `checkbox`, `datetime`, `file_list`, `file_upload`, `select`, `select_table`, `string`, `submit_button` and `text`.
  `string` field has additional key "message" for tooltip message, `file_upload` has `input_text` and `browse_link_text` keys.

  before:
   ```
   stringField: Field label
   fileUploadField: Field label
   ```

  after:

   ```
   stringField:
     label: Field label
     message: Tooltip message
   fileUploadField:
     label: Field label
     input_text: Field text
     browse_link_text: Link text
   ```
- [#674](https://github.com/hydra-billing/homs/pull/674) Downcase SSO key in the config & treat redis port as a number.

  If you are using SSO make this change your `homs_configuration.yml` from
  ```yaml
  SSO:
   ...

  redis:
    host: redis_host
    port: '12345'
  ```
  to
  ```yaml
  sso:
   ...

  redis:
    host: redis_host
    port: 12345
  ```
- [#690](https://github.com/hydra-billing/homs/pull/690) Use `Bearer` instead of `Token token=` for JWT auth header.

  From now on HOMS HTTP API expects `Authorization` header in the following format:
  ```
  Bearer your.jwt.here
  ```
  instead of
  ```
  Token token=your.jwt.here
  ```

### Features
- [#683](https://github.com/hydra-billing/homs/pull/693) Localize SSO authentication error messages.

### Bugfixes
- [#707](https://github.com/hydra-billing/homs/pull/707) Fix warning dangerous query method.
- [#708](https://github.com/hydra-billing/homs/pull/708) Don't install unused activestorage gem.
- [#710](https://github.com/hydra-billing/homs/pull/710) Fix chromedriver link for tests.


v2.7.20 [2024-08-12]
-------------------
### Features
- [#750](https://github.com/hydra-billing/homs/pull/750) Support fr locale.

v2.7.19 [2024-04-04]
-------------------
### Bugfixes
- [#742](https://github.com/hydra-billing/homs/pull/742) Allow to change starter groups and starter users for business process without reloading HOMS

v2.7.17 [2023-09-10]
-------------------
### Bugfixes
- [#710](https://github.com/hydra-billing/homs/pull/710) Fix chromedriver link for tests.
- [#727](https://github.com/hydra-billing/homs/pull/727) Freeze minio version

v2.7.12 [2023-02-01]
-------------------
### Bugfixes
- [#683](https://github.com/hydra-billing/homs/pull/689) Set focus to the first element in form.
- [#683](https://github.com/hydra-billing/homs/pull/687) Filter processes by entity_type.

v2.7.11 [2023-01-28]
-------------------
### Bugfixes
- [#683](https://github.com/hydra-billing/homs/pull/686) Add entity_type to business key.

v2.7.10 [2023-01-24]
-------------------
### Bugfixes
- [#683](https://github.com/hydra-billing/homs/pull/683) Allow to set time in datetimepicker. Added new option for datetime field type:
  ```
  set_time: true|false
  ```
  False by default. If true - time input becomes available in calendar.

v2.7.9 [2022-09-01]
-------------------
### Bugfixes
- [#671](https://github.com/hydra-billing/homs/pull/670) Cut trailing zeroes when validate number in order form.

v2.7.8 [2022-08-04]
-------------------
### Features
- [#643](https://github.com/latera/homs/pull/643) Filter business processes available for launch in the SSO world.
- [#668](https://github.com/latera/homs/pull/668) Add es locale.

v2.7.7 [2022-07-11]
-------------------
### Features
- [#660](https://github.com/hydra-billing/homs/pull/660) Use scope parameter for SSO authentication.

### Bugfixes
- [#662](https://github.com/hydra-billing/homs/pull/662) Change scope parameter to array.
- [#664](https://github.com/hydra-billing/homs/pull/664) Fix hide start BP button in case of `candidate_starters` enabled.

v2.7.6 [2022-06-28]
-------------------
### Bugfixes
- [#659](https://github.com/hydra-billing/homs/pull/659) Always show BP form deployed.

v2.7.5 [2022-06-20]
-------------------
### Bugfixes
- [#656](https://github.com/hydra-billing/homs/pull/656) Pass initialVariables into Buttons.

v2.7.4 [2022-06-02]
-------------------
### Features
- [#654](https://github.com/hydra-billing/homs/pull/654) Use native Keycloak roles from resource_access instead of custom user attribute.
- [#653](https://github.com/hydra-billing/homs/pull/653) Differentiate users from Keycloak and regular.

v2.7.3 [2022-04-29]
-------------------
### Features
- [#651](https://github.com/latera/homs/pull/651) Add role transfering from keycloak to HOMS.

v2.7.2 [2022-04-01]
-------------------
### Features
- [#646](https://github.com/latera/homs/pull/646) Fill user not nullable fields by default for SSO first login.

v2.7.1 [2022-04-01]
-------------------
### Features
- [#644](https://github.com/latera/homs/pull/644) Add logging in ArcSight format at the moment of login by SSO.
- [#641](https://github.com/latera/homs/pull/641) Filter business processes available for launch.

v2.7.0 [2022-03-23]
-------------------
### Breaking changes
- [#600](https://github.com/latera/homs/pull/600) Replace bootstrap-datetimepicker with react-datepicker.

  Dynamic conditions by datetime on form now strictly use ISO date format
- [#602](https://github.com/latera/homs/pull/602) Use FontAwesomeIcon for icons.

  - Changed customization rule for icon radio buttons and checkboxes:
    - `hbw-checkbox-symbol`, `hbw-checked-checkbox-symbol`, `hbw-checked-checkbox-symbol`, `hbw-radio-symbol` and `hbw-checked-radio-symbol` have been removed. To select the radiobaton icon and the checkbox icon you need add to the task form field. For example:
    ```
            - name: CustomIconCheckbox
              type: checkbox
              label: Checkbox label 1
              icon:
                unchecked: ['far', 'circle']
                checked: ['fas', 'square']
    ```
    Where first element is class for custom icon `far`, `fas`, `fab`. Second - name of the fontawesome icon.
  - Changed customization rule for business-process icon: in `hbw.yml` for `fa_class` key use class and icon name. For example:
  ```
            new_customer:
              - name: 'New Customer'
                title: 'Start Creating Customer'
                class: 'btn btn-primary'
                fa_class: ['fas', 'user']
                bp_code: 'new_customer'
  ```
- [#607](https://github.com/latera/homs/pull/607) Use `button_text` field for fallback submit-select components.

  For submit-select buttons was added new field `button_text` which contain a fallback for text translation. The previous behavior has been changed: the fallback on `label` field has been replaced with the `button_text` key. The key for translations still stored in the `name` field. For example:
  ```
          - name: submitSelectButton
            type: submit_select
            css_class: col-xs-12
            options:
              - name: button1
                button_text: Button 1
                value: Button 1
                css_class: btn btn-success btn-lg
  ```


### Features
- [#638](https://github.com/latera/homs/pull/638) Improve SSO error messages.
- [#637](https://github.com/latera/homs/pull/637) Add keycloak authorization for BPM.
- [#631](https://github.com/latera/homs/pull/631) Add authorization by SSO (with Keycloak).
- [#583](https://github.com/latera/homs/pull/583) Add the output of errors for the availability of the Сamunda service to the widget.
- [#562](https://github.com/latera/homs/pull/562) Bring in TypeScript into the project.
- [#564](https://github.com/latera/homs/pull/564) Append files to form instead of substituting when multiple prop is set up.
- [#575](https://github.com/latera/homs/pull/575) Add custom view for files to order data.
- [#571](https://github.com/latera/homs/pull/512) Add dynamic `disable_if` and `delete_if` options for select_table field.
- [#580](https://github.com/latera/homs/pull/580) Add several upload file fields for single form.
- [#587](https://github.com/latera/homs/pull/587) Add dynamic `disable_if` and `delete_if` options for datetime field.
- [#593](https://github.com/latera/homs/pull/593) Add disable_if/delete_if for submit_select buttons.
- [#604](https://github.com/latera/homs/pull/604) Add customization for CancelProcessButton.
- [#609](https://github.com/latera/homs/pull/609) Add `required` property to radio_button.
- [#629](https://github.com/latera/homs/pull/629) Update dry to 1.x.x.
- [#632](https://github.com/latera/homs/pull/632) Make a login form with SSO.
- [#606](https://github.com/latera/homs/pull/606) Allow to set Minio host through environment variable.

### Refactoring
- [#592](https://github.com/latera/homs/pull/592) Replace memcached with redis.
- [#586](https://github.com/latera/homs/pull/586) Stub api container in tests with local api mock file and refactor tests.
- [#594](https://github.com/latera/homs/pull/594) Get rid of Webpacker & build all assets with Webpack 5.
- [#598](https://github.com/latera/homs/pull/598) Remove the mask option validation from the string order field.

### Bugfixes
- [#613](https://github.com/latera/homs/pull/613) Fix typo in variable to display notifications.

v2.6.18 [2021-12-02]
-------------------
### Features
- [#620](https://github.com/latera/homs/pull/620) Add deleting users.

v2.6.16 [2021-11-03]
-------------------
### Features
- [#610](https://github.com/latera/homs/pull/610) Log app start/stop and user login attempts in CEF.

v2.6.15 [2021-10-29]
-------------------
### Bugfixes
- [#611](https://github.com/latera/homs/pull/611) Filter current tasks by process_key.

v2.6.14 [2021-10-22]
-------------------
### Bugfixes
- [#601](https://github.com/latera/homs/pull/601) Move fontawesome to public/assets.
- [#603](https://github.com/latera/homs/pull/603) Don't highlight multi nullable select_table.

v2.6.13 [2021-09-03]
-------------------
### Bugfixes
- [#595](https://github.com/latera/homs/pull/595) Fix substitution of empty values of BP variables in localized static fields.
- [#597](https://github.com/latera/homs/pull/597) Wrap long variable values to a new line.

v2.6.12 [2021-08-20]
-------------------
### Features
- [#591](https://github.com/latera/homs/pull/591) Support substitutions in localized static fields.

v2.6.11 [2021-08-16]
-------------------
### Bugfixes
- [#582](https://github.com/latera/homs/pull/582) Fix select table in edge cases.
- [#584](https://github.com/latera/homs/pull/584) Add locale to field with type `static`.

v2.6.10 [2021-07-12]
-------------------
### Features
- [#577](https://github.com/latera/homs/pull/577) Hide file upload area if the only possible file has been attached.

v2.6.9 [2021-07-08]
-------------------
### Bugfixes
- [#574](https://github.com/latera/homs/pull/574) Translate BP name with correct translator.
- [#576](https://github.com/latera/homs/pull/576) Show message about incorrect sign in.

v2.6.8 [2021-07-01]
-------------------
### Features
- [#573](https://github.com/latera/homs/pull/573) Allow to show/hide notifications about new assigned tasks.

v2.6.7 [2021-06-24]
-------------------
### Features
- [#567](https://github.com/latera/homs/pull/567) Add customization capability for file_upload.
- [#564](https://github.com/latera/homs/pull/564) Append files to form instead of substituting when multiple prop is set up.

v2.6.6 [2021-06-18]
-------------------
### Bugfixes
- [#565](https://github.com/latera/homs/pull/565) Use versions from task events & add simple tests for the store.

v2.6.5 [2021-06-18]
-------------------
### Bugfixes
- [#563](https://github.com/latera/homs/pull/563) Generate unique id for file_upload compoment.

v2.6.4 [2021-06-08]
-------------------
### Features
- [#558](https://github.com/latera/homs/pull/558) Add dynamic `disable_if` and `delete_if` options for radio button.
- [#561](https://github.com/latera/homs/pull/561) Add dynamic `disable_if` and `delete_if` options for checkbox.

v2.6.3 [2021-06-01]
-------------------
### Features
- [#559](https://github.com/latera/homs/pull/559) Customize checkboxes and radiobuttons.

v2.6.2 [2021-05-31]
-------------------
### Features
- [#556](https://github.com/latera/homs/pull/556) Add css variable for links color.
- [#557](https://github.com/latera/homs/pull/557) Customize static fonts.
- [#560](https://github.com/latera/homs/pull/560) Unify drag&drop field and browse file button.

  `file_upload`'s field options `drag_and_drop` and `preview` have been removed: drag&drop aria and file preview are always displayed now.


v2.6.1 [2021-05-17]
-------------------
### Features
- [#553](https://github.com/latera/homs/pull/553) Forbid more than one active process instance per entity.

  Now we set `businessKey` field value on BP start to `${entity_class}_${entity_code}` value.

  At first, it's semantically correct: `businesskey` field in Camunda BPMN is definitely for the same purposes as `entity_code` in HBW and it must be isolated between different host applications (`entity_class`).

  Also it can be used for process-per-entity restriction, you just need to add [corresponding constraint](https://docs.camunda.org/manual/latest/user-guide/process-engine/database/database-configuration/#business-key) to Camunda DB:
  ```
  alter table ACT_RU_EXECUTION add constraint ACT_UNIQ_RU_BUS_KEY UNIQUE (PROC_DEF_ID_, BUSINESS_KEY_);
  ```

  ⚠️ Warning!
  Do not reset/update `businessKey` manually inside your business processes, since it can lead to unexpected side effects.

- [#555](https://github.com/latera/homs/pull/555) Allow to start business process automatically.

  You can start business process automatically (if it's not already running) by setting `autorunProcessKey` parameter on HBW initialization. Check [HBW integration guide](https://github.com/latera/homs/blob/master/hbw/README.md) for details.

v2.6.0 [2021-05-06]
-------------------
### Breaking changes
- New options have been introduced for `file_upload` field type:

  * ```
    multiple: true|false
    ```
    allows to upload multiple files at once;

  * ```
    drag_n_drop: true|false
    ```
    controls drag'n'drop area visibility.

  It's `false` by default so that differs from old behaviour (all `file_upload` fields were multiple and had visible drag'n'drop area).
  Hence you should set these options to `true` to keep the old behaviour.
  Look at [#535](https://github.com/latera/homs/pull/535) for deatils

- [DEPRECATION] Endpoint `/widget/file_upload` is deprecated.  Please use `/widget/files/upload` instead.

### Features
- [#530](https://github.com/latera/homs/pull/530) Customize fonts in HBW.
- [#534](https://github.com/latera/homs/pull/534), [#536](https://github.com/latera/homs/pull/536),
  [#543](https://github.com/latera/homs/pull/543), [#545](https://github.com/latera/homs/pull/545),
  [#547](https://github.com/latera/homs/pull/547), [#546](https://github.com/latera/homs/pull/546),
  [#548](https://github.com/latera/homs/pull/548), [#551](https://github.com/latera/homs/pull/551) Add custom top/bottom descriptions and placeholder for components:
  * string
  * select
  * checkbox
  * datetime
  * file_list(placement: top only)
  * text
  * file_upload
  * radio_button(placement: top only)
  * select_table

  Now you can specify some additional description placed over/under the input for fields listed above with option:
  ```
    description:
      placement: top|bottom
      text: Your description test
  ```
- [#535](https://github.com/latera/homs/pull/535) Display attached files thumbnails.

  Field type `file_upload` renders thubmnailed preview of uploaded files with `preview: true` flag, e.g.
  ```
  form:
    ...
    fields:
    - name: fileUploadWithPreview
      type: file_upload
      ...
      preview: true
  ```
- [#537](https://github.com/latera/homs/pull/537) Add fileinput field name to uploaded file metadata.
- [#550](https://github.com/latera/homs/pull/550) Add radio buttons.

### Bugfixes
- [#538](https://github.com/latera/homs/pull/538) Removed usage of rubocop-junit_formatter gem.

v2.5.1 [2021-04-08]
### Bugfixes
- [#526](https://github.com/latera/homs/pull/526) Fix fetch BP translations.
- [#531](https://github.com/latera/homs/pull/531) Update Rails to fix `mimemagic` issue.

v2.5.0 [2020-12-14]
-------------------
### Breaking changes

**HBW**:
Change serialization of disabled, read-only and hidden fields. Now all values of these fields will not be submitted.
See [#296](https://github.com/latera/homs/pull/296) for more details.

### Features
- [#493](https://github.com/latera/homs/pull/493) Add missing labels for inputs on search order form.
- [#497](https://github.com/latera/homs/pull/497) Handle connection error when try to print order.
- [#499](https://github.com/latera/homs/pull/499) Increase memory limit for worker.
- [#289](https://github.com/latera/homs/pull/289) Make conditions `disable_if` and `delete_if` dynamic.
- [#289](https://github.com/latera/homs/pull/512) Add dynamic `disable_if` and `delete_if` options for select.
- [#510](https://github.com/latera/homs/pull/510) Add i18n for business processes.

### Bugfixes
- [#298](https://github.com/latera/homs/pull/298) Keep BP variables values after submit if they are not on form or disabled.
- [#289](https://github.com/latera/homs/pull/512) Fix setting not-nullable select's value with blank variable.
- [#513](https://github.com/latera/homs/pull/513) Fix Camunda/PostgreSQL compatibility.
- [#514](https://github.com/latera/homs/pull/514) Don't validate hidden and disabled fields.
- [#515](https://github.com/latera/homs/pull/515) Escape single quotes, double quotes and backslashes in conditions.
- [#525](https://github.com/latera/homs/pull/525) Fix url for select.

### Refactoring
- [#506](https://github.com/latera/homs/pull/506), [#511](https://github.com/latera/homs/pull/511) Update ruby and js dependencies.
- [#510](https://github.com/latera/homs/pull/510) Refactor render() of form field components.

v2.4.4 [2021-04-08]
-------------------
### Bugfixes
- [#531](https://github.com/latera/homs/pull/531) Update Rails to fix `mimemagic` issue.

v2.4.2 [2021-01-15]
-------------------
### Bugfixes
- [#513](https://github.com/latera/homs/pull/513) Fix Camunda/PostgreSQL compatibility.
- [#518](https://github.com/latera/homs/pull/518) Set default value for idle_in_transaction_session_timeout PG parameter.

v2.4.1 [2020-09-24]
-------------------
### Bugfixes
- [#494](https://github.com/latera/homs/pull/494) Fix textarea height and icon in template.
- [#495](https://github.com/latera/homs/pull/495) Add cursor pointer for checkboxes.
- [#496](https://github.com/latera/homs/pull/496) Fix panel title font color and remove box shadow.
- [#500](https://github.com/latera/homs/pull/500) Make datetime addon border color customizable.
- [#501](https://github.com/latera/homs/pull/501) Allow to customize react-select.

### Refactoring
- [#498](https://github.com/latera/homs/pull/498) Add css variable for text color when element is focused/selected.

v2.4.0 [2020-08-14]
-------------------
### Features
- [#465](https://github.com/latera/homs/pull/465) Add SymlinkAssets in development mode and clean assets before every build.
- [#470](https://github.com/latera/homs/pull/470) Add new type of processes.
- [#471](https://github.com/latera/homs/pull/471) Customize submit button name.
- [#491](https://github.com/latera/homs/pull/491) Allow to customize form controls.

### Bugfixes
- [#476](https://github.com/latera/homs/pull/476) Fix symlinking dev assets.
- [#475](https://github.com/latera/homs/pull/475) Fix displaying errors in `select` and `select_table`.

### Refactoring
- [#481](https://github.com/latera/homs/pull/481) Use css variables for all colors.
- [#480](https://github.com/latera/homs/pull/480) Make `font-size` relative to the base.
- [#482](https://github.com/latera/homs/pull/482) Replace similar colors.

v2.3.4 [2020-08-07]
-------------------
### Bugfixes
- [#486](https://github.com/latera/homs/pull/486) Fix horizontal scroll in `select_table` nested to `group`.
- [#487](https://github.com/latera/homs/pull/487) Do not crash widget when translation is missing.

v2.3.3 [2020-06-25]
-------------------
### Bugfixes
- [#469](https://github.com/latera/homs/pull/469) Calculate delete_if/disable_if values before dependent component renders.

v2.3.2 [2020-05-28]
-------------------
### Features
- [#462](https://github.com/latera/homs/pull/462) Restyle form control buttons.

v2.3.1 [2020-04-24]
-------------------
### Bugfixes
- [#452](https://github.com/latera/homs/pull/452) Pass user e-mail explicitly on websocket channel subscription create.

v2.3.0 [2020-03-27]
-------------------
### Features
- [#446](https://github.com/latera/homs/pull/446) Add cancel process button to all forms by default.

v2.2.4 [2020-08-07]
-------------------
### Bugfixes
- [#486](https://github.com/latera/homs/pull/486) Fix horizontal scroll in `select_table` nested to `group`.
- [#487](https://github.com/latera/homs/pull/487) Do not crash widget when translation is missing.

v2.2.3 [2020-04-24]
-------------------
### Bugfixes
- [#452](https://github.com/latera/homs/pull/452) Pass user e-mail explicitly on websocket channel subscription create.

v2.2.2 [2020-03-26]
-------------------
### Refactoring
- [#442](https://github.com/latera/homs/pull/442) Turn Messenger class to importable module.

### Bugfixes
- [#441](https://github.com/latera/homs/pull/441) Make task search case insensitive.
- [#450](https://github.com/latera/homs/pull/450) Force react-select menu to overlay bootstrap form controls.

v2.2.1 [2020-03-01]
-------------------
### Bugfixes
- [#db74749](https://github.com/latera/homs/commit/db74749) Use `Object.entries` returns only own object properties instead of `Object.values`.

v2.2.0 [2020-02-13]
-------------------
### Breaking changes

**HBW**:
- Long polling has been replaced by WebSocket channels based on webhooks from Camunda BPMN.
  It uses task events (create, assignment, complete and delete) to notify HBW that new data should be fetched.

### Refactoring
- [#401](https://github.com/latera/homs/pull/401) Wrap all widget parts to single app with store context & render app parts as portals.
- [#415](https://github.com/latera/homs/pull/415) Remove unused endpoint for getting tasks number.
- [#419](https://github.com/latera/homs/pull/419) Remove unused long polling supporting code.
- [#423](https://github.com/latera/homs/pull/423) Replace jquery with fetch api.

### Features
- [#403](https://github.com/latera/homs/pull/403) Add `ActionCable` and `Redis`.
- [#405](https://github.com/latera/homs/pull/405) Add WebSocket.
- [#404](https://github.com/latera/homs/pull/404) Initialize store context with full task list.
- [#408](https://github.com/latera/homs/pull/408) Remove capistrano.
- [#406](https://github.com/latera/homs/pull/406) Add hooks callback.
- [#410](https://github.com/latera/homs/pull/410) Use stored full task list instead of partially fetched one.
- [#411](https://github.com/latera/homs/pull/410) Fetch task from cache.
- [#413](https://github.com/latera/homs/pull/413) Add endpoint with one task able to use cache.
- [#416](https://github.com/latera/homs/pull/416) One-time request initial data instead of polling.
- [#420](https://github.com/latera/homs/pull/420) Initialize store with all data & use it in BP components.
- [#429](https://github.com/latera/homs/pull/429) Get task forms by entities lazy.

### Bugfixes
- [#430](https://github.com/latera/homs/pull/430) Apply events received while store initialization in turn.

v2.1.6 [2020-03-26]
-------------------
### Bugfixes
- [#450](https://github.com/latera/homs/pull/450) Force react-select menu to overlay bootstrap form controls.

v2.1.5 [2020-03-05]
-------------------
### Bugfixes
- [#435](https://github.com/latera/homs/pull/435) Add endpoint for events from Camunda.

v2.1.4 [2020-01-30]
-------------------
### Bugfixes
- [#435](https://github.com/latera/homs/pull/421) Remove pid file on app start

v2.1.3 [2020-01-16]
-------------------
### Refactoring
- [#391](https://github.com/latera/homs/pull/391) Remove side menu with tasks.

v2.1.2 [2019-12-12]
-------------------
### Features
- [#392](https://github.com/latera/homs/pull/392) Stop polling on window blur.
- [#393](https://github.com/latera/homs/pull/393) Invalidate cache if no definition found.

v2.1.1 [2019-11-28]
-------------------
Removed `tasks/form` enrtypoint. Entrypoint `tasks` returns tasks with form.

### Features
- [#390](https://github.com/latera/homs/pull/390) Add spinner on tasks loading.

### Performance
- [#384](https://github.com/latera/homs/pull/384) Remove redundant requests on lookup search.
- [#387](https://github.com/latera/homs/pull/387) Get form from backend with tasks.

v2.1.0 [2019-11-21]
-------------------
### Features
- [#374](https://github.com/latera/homs/pull/374) Add description to popup task list.
- [#381](https://github.com/latera/homs/pull/381) Notify user about new assigned tasks.

### Performance
- [#380](https://github.com/latera/homs/pull/380) Optimize getting current task.
- [#379](https://github.com/latera/homs/pull/379) Cache process definitions fetched from Camunda. Add `MEMCAHED_URL` field to `.env`.
    - Notice: if you want to add new business process type you have to restart application.

### Bugfixes
- [#375](https://github.com/latera/homs/pull/375) Adjust new elements with existent style.

v2.0.1 [unreleased]
-------------------
### Bugfixes
- [#388](https://github.com/latera/homs/pull/388) Fix widget mounting in integrations.

v2.0.0 [2019-10-31]
-------------------
### Breaking changes
HBW initialization parameters were changed. Instead of
```
locale: 'en'
```
you should pass locale like
```
locale: {
    code: 'en',
    dateTimeFormat: 'MM/dd/yyyy HH:mm aaa'
}
```
See [#367](https://github.com/latera/homs/pull/367) and [HBW readme](https://github.com/latera/homs/blob/master/hbw/README.md) for more details.

v1.8.3 [unreleased]
-------------------
### Bugfixes
- [#386](https://github.com/latera/homs/pull/386) List tasks for current entity class only.

v1.8.1 [2019-10-24]
-------------------
### Bugfixes
- [#366](https://github.com/latera/homs/pull/366) Remove claimed row in task overview.

v1.8.0 [2019-10-24]
-------------------
### Breaking changes
- `select_table` with `multi:true` saves all data in JSON format now. It's not possible to open form contains old data with such table.
    See [#300](https://github.com/latera/homs/pull/300) for more details.
- `hbw.yml` has new required field `bp_name_key` – variable name from Camunda's BP, where process name is stored.
    See [#340](https://github.com/latera/homs/pull/340) for more details.
- `hbw.yml` config structure was updated. Entity classes must be moved under key `entities`:

   before:
   ```
   hbw:
     order:
       entity_code_key: homsOrderCode
       bp_toolbar:
         entity_type_buttons: {}

     billing_customer:
       entity_code_key: billingCustomerId
       bp_toolbar:
         common_buttons: []
         entity_type_buttons: {}
   ```

   after:
   ```
   hbw:
     entities:
       order:
         entity_code_key: homsOrderCode
         bp_toolbar:
           common_buttons: []
           entity_type_buttons: {}

       billing_customer:
         entity_code_key: billingCustomerId
         bp_toolbar:
           common_buttons: []
           entity_type_buttons: {}
   ```
   Look at [#317](https://github.com/latera/homs/pull/317) for details.

### Features
- [#283](https://github.com/latera/homs/pull/283) Seed improvements: add env variables for initial values
- [#288](https://github.com/latera/homs/pull/288) Add drag and drop field for file upload.
- [#309](https://github.com/latera/homs/pull/309) Add error boundaries to all form components.
- [#317](https://github.com/latera/homs/pull/317) Validate `hbw.yml` config.
- [#318](https://github.com/latera/homs/pull/318) Improve scroll style in select_table.
- [#327](https://github.com/latera/homs/pull/327) Optimize Camunda variables fetching.
- [#329](https://github.com/latera/homs/pull/329) Add method for getting unassigned tasks from user's group.
- [#330](https://github.com/latera/homs/pull/330) Add new available tasks components to mount.
- [#331](https://github.com/latera/homs/pull/331) Add unassigned tasks count method.
- [#334](https://github.com/latera/homs/pull/334) Add my/unassigned tasks switch component.
- [#333](https://github.com/latera/homs/pull/333) Optimize Camunda process definitions fetching.
- [#332](https://github.com/latera/homs/pull/332) Add table for claiming.
- [#337](https://github.com/latera/homs/pull/337) Add claim button for widget page.
- [#338](https://github.com/latera/homs/pull/338) Add task overview component.
- [#336](https://github.com/latera/homs/pull/336) Update React to 16.10.2.
- [#339](https://github.com/latera/homs/pull/339) Add polling with pagination for claiming table.
- [#344](https://github.com/latera/homs/pull/344) Add component for rendering created/deadline date.
- [#345](https://github.com/latera/homs/pull/345) Add task search.
- [#341](https://github.com/latera/homs/pull/341) Add short tasks list for popup.
- [#342](https://github.com/latera/homs/pull/342) Create component with counter.
- [#347](https://github.com/latera/homs/pull/347) Improve claim buttons styles.
- [#349](https://github.com/latera/homs/pull/349) Change colors of priorities.
- [#346](https://github.com/latera/homs/pull/346) Add code coverage for backend.
- [#352](https://github.com/latera/homs/pull/352) Wrap task list page together.
- [#351](https://github.com/latera/homs/pull/351) Improve claim button styles on widget form.
- [#354](https://github.com/latera/homs/pull/354) Wrap task short pop up list page together.
- [#353](https://github.com/latera/homs/pull/353) Integrate new claiming components.
- [#356](https://github.com/latera/homs/pull/356) Highlight opened task in table.
- [#358](https://github.com/latera/homs/pull/358) Add react components unit tests for HBWDueDate and HBWCreatedDate.

v1.7.8 [2019-10-03]
-------------------
### Bugfixes
- [#328](https://github.com/latera/homs/pull/328) Use Font Awesome 5 instead of font-awesome-rails v4.

v1.7.6 [2019-09-12]
-------------------
### Bugfixes
- [#323](https://github.com/latera/homs/pull/323) Submit each form on it's own button.
- [#324](https://github.com/latera/homs/pull/324) Use the email from requests if it has any.

v1.7.5 [2019-07-11]
-------------------
### Bugfixes
- [#316](https://github.com/latera/homs/pull/316) Fix the way ajax request are made in lookup select.

v1.7.4 [2019-07-04]
-------------------
### Bugfixes
- [#315](https://github.com/latera/homs/pull/315) Add additional exceptions for Oracle's date formats.

v1.7.3 [2019-06-28]
-------------------
### Bugfixes
- [#311](https://github.com/latera/homs/pull/311) Fix overflow after form collapsing.

v1.7.2 [2019-06-13]
-------------------
### Bugfixes
- [#301](https://github.com/latera/homs/pull/301) Change deprecated `render nothing: true` to `head`.

v1.7.1 [2019-05-17]
-------------------

### Features
-   [#277](https://github.com/latera/homs/pull/277) Allow to configure widget polling interval.
-   [#275](https://github.com/latera/homs/pull/275) Set logging level from env file.
-   [#274](https://github.com/latera/homs/pull/274) Add duration of requests logging.
-   [#278](https://github.com/latera/homs/pull/278) Migrate from thin to unicorn.
-   [#284](https://github.com/latera/homs/pull/284) Try to reconnect if got Oracle connection error.
-   [#272](https://github.com/latera/homs/pull/272) Better view for multiple BP buttons.

v1.7.0 [2019-04-25]
-------------------

### Breaking changes

-   Dropped `activiti` support:
    - changed `activiti` to `camunda` in all `docker-compose` files
    - removed `docker-compose.activiti.yml`
    - sources type `static/activiti` was renamed to `static/bpm` in `config/sources.yml`
    - key `use_activiti_stub` was renamed to `use_bpm_stub` in ` config/hbw.yml`

    See [#253](https://github.com/latera/homs/pull/253) for more details.

### Features
-   [#248](https://github.com/latera/homs/pull/248) Add Rubocop.
-   [#251](https://github.com/latera/homs/pull/251) Update react-select up to 2.1.1.
-   [#253](https://github.com/latera/homs/pull/253) Drop Activiti support.
-   [#258](https://github.com/latera/homs/pull/258) Update React & ReactDOM to 16.0.0
-   [#259](https://github.com/latera/homs/pull/259) Get number of tasks by request to Camunda.
-   [#268](https://github.com/latera/homs/pull/268) Move validation of `select` and `select_table` to helpers.
-   [#273](https://github.com/latera/homs/pull/273) Change colors on select and hover of `select_table`.
-   [#276](https://github.com/latera/homs/pull/276) Fetch tasks for one entity by default.

v1.6.1 [unreleased]
-------------------

### Features
-   [#246](https://github.com/latera/homs/pull/246) Download Font Awesome when widget is loaded.

### Bugfixes
-   [#241](https://github.com/latera/homs/pull/241) Fix chevron reaction on task collapse.
-   [#242](https://github.com/latera/homs/pull/242) Search file_list field in nested field sets.
-   [#243](https://github.com/latera/homs/pull/243) Fix database port config usage.
-   [#245](https://github.com/latera/homs/pull/245) Disable business process buttons when loading.
-   [#247](https://github.com/latera/homs/pull/247) Use internal ports in homs_network.
-   [#250](https://github.com/latera/homs/pull/250) Fix file uploading.
-   [#252](https://github.com/latera/homs/pull/252) Fix `select_table` behavior in multi mode.
-   [#257](https://github.com/latera/homs/pull/257) Check flag `multi` in `select_table` when select row.
-   [#262](https://github.com/latera/homs/pull/262) Fix multi nullable `select_table`.
-   [#265](https://github.com/latera/homs/pull/265) Allow nullability for `select` lookup mode.
-   [#264](https://github.com/latera/homs/pull/264) Fix required `select` with numeric value.
-   [#267](https://github.com/latera/homs/pull/267) Fix widget calendar locale.
-   [#270](https://github.com/latera/homs/pull/270) Fix task collapse.

v1.6.0 [2019-01-29]
-------------------

### Features
-   [#189](https://github.com/latera/homs/pull/189) Show alert if form with file upload field has no file list field.
-   [#197](https://github.com/latera/homs/pull/197) Use Camunda as BPMS in default docker-compose.
-   [#195](https://github.com/latera/homs/pull/195) Upgrade React & ReactDOM to 15.6.2, migrate to higher order components from mixins.
-   [#153](https://github.com/latera/homs/pull/153) Allow updating users encrypted password and salt.
-   [#202](https://github.com/latera/homs/pull/202) Remove mount configs from docker-compose and set postgres version.
-   [#206](https://github.com/latera/homs/pull/206) Use higher order component instead of HBWDeleteIfMixin.
-   [#203](https://github.com/latera/homs/pull/203) Allow to unmount widget and replace some glyphicons with FontAwesome.
-   [#199](https://github.com/latera/homs/pull/199) Move assets generation to Dockerfiles.
-   [#207](https://github.com/latera/homs/pull/207) Remove extra locales from moment.js
-   [#209](https://github.com/latera/homs/pull/209) Drop react-rails & react_ujs dependencies.
-   [#205](https://github.com/latera/homs/pull/205) Use higher order component instead of HBWSelectMixin.
-   [#213](https://github.com/latera/homs/pull/213) Add payload to widget's requests.
-   [#218](https://github.com/latera/homs/pull/218) Pass initial BP variables to widget initial payload.
-   [#223](https://github.com/latera/homs/pull/223) Add directories for postgresql-client.
-   [#227](https://github.com/latera/homs/pull/227) Add `required` option for string inputs. Use `nullable: false` in select/select_table for the same reason.
-   [#230](https://github.com/latera/homs/pull/230) Add disable_if condition to checkbox, datetime, file_list, select, select_table, string, text.
-   [#232](https://github.com/latera/homs/pull/232) [**DEPRECATION**] Deprecate Activiti usage.
-   [#233](https://github.com/latera/homs/pull/233) Run DB on port specified in `.env` file.
-   [#231](https://github.com/latera/homs/pull/231) Add `multi` option to select_table.
-   [#240](https://github.com/latera/homs/pull/240) Update ruby up to 2.6.0.

### Bugfixes
-   [#194](https://github.com/latera/homs/pull/194) Set limit on the number of choices in lookup select from sql requests.
-   [#198](https://github.com/latera/homs/pull/198) Add seed in test's logs.
-   [#201](https://github.com/latera/homs/pull/201) Fix pointer on menu button.
-   [#219](https://github.com/latera/homs/pull/219) Update obsolete dependencies.
-   [#221](https://github.com/latera/homs/pull/221) Use babel-transform-runtime-plugin instead of babel-polyfill.
-   [#226](https://github.com/latera/homs/pull/226) Fix initial variables for Activiti.
-   [#229](https://github.com/latera/homs/pull/229) Add list of exceptions for binds, which are used for oracle's dates.
-   [#239](https://github.com/latera/homs/pull/239) Support empty date in select_table.

v1.5.3 [2019-01-16]
-------------------

### Bugfixes
-   [#220](https://github.com/latera/homs/pull/220) Fix error when using string's static pattern only.
-   [#224](https://github.com/latera/homs/pull/224) Fix type change in the order creation.

v1.5.2 [2018-11-27]
-------------------

### Features
-   [#215](https://github.com/latera/homs/pull/215) Use FontAwesome instead of Glyphicons in `bootstrap-datimepicker`.

### Bugfixes
-   [#217](https://github.com/latera/homs/pull/217) Add production as a default setting.

v1.5.1 [2018-11-14]
-------------------

### Bugfixes
-   [#204](https://github.com/latera/homs/pull/204) Pass locale for translations from environment.
-   [#211](https://github.com/latera/homs/pull/211) Fix lookup and change multi select to single.

v1.5.0 [2018-10-29]
-------------------

### Features
-   [#172](https://github.com/latera/homs/pull/172) Do not use custom docker images for Postgres containers.
-   [#175](https://github.com/latera/homs/pull/175) Allow using environment variables in YAML configs.
-   [#167](https://github.com/latera/homs/pull/167) Add production docker-compose file for Oracle.
-   [#166](https://github.com/latera/homs/pull/166), [#7](https://github.com/latera/activiti-homs-docker/pull/7) Pass host, user and pass to waiting for Postgres script.
-   [#159](https://github.com/latera/homs/pull/159) Add tagged logger.
-   [#169](https://github.com/latera/homs/pull/169) Remove overflowing of deprecation warnings in tests.
-   [#161](https://github.com/latera/homs/pull/161), [#6](https://github.com/latera/activiti-homs-docker/pull/6) Use activiti credentials from environment variables.
-   [#151](https://github.com/latera/homs/pull/151) Add current version to docker container.
-   [#151](https://github.com/latera/homs/pull/152) Remove libqtwebkit-dev.
-   [#177](https://github.com/latera/homs/pull/177) Improve README and docker-compose files.
-   [#171](https://github.com/latera/homs/pull/171) Migrate from CoffeeScript to ES6 + Webpack.
-   [#179](https://github.com/latera/homs/pull/179) Replace `jquery-ui` tooltip with `popper.js`.
-   [#184](https://github.com/latera/homs/pull/184) Add `base_url` option to main config provides custom prefix for all paths in app. Fixes [#148](https://github.com/latera/homs/issues/148).
-   [#185](https://github.com/latera/homs/pull/185) Speed up docker build.
-   [#188](https://github.com/latera/homs/pull/188) Use `.env` file in docker-compose.
-   [#183](https://github.com/latera/homs/pull/183) Replace `Select2` with `react-select` in widget.

### Bugfixes
-   [#170](https://github.com/latera/homs/pull/170) Use active support logger as base.
-   [#190](https://github.com/latera/homs/pull/190) Fix multiply running of tests in docker.

v1.4.0.2 [2018-12-10]
---------------------
### Bugfixes
-   [#165](https://github.com/latera/homs/pull/165) Remove new line from BPM widget basic auth generator.
-   [#174](https://github.com/latera/homs/pull/174) Remove unnecessary scroll in BPM widget select tables.
-   [#176](https://github.com/latera/homs/pull/176) Fix limits on the number of lines from sql requests.

v1.4.0.1 [2018-10-08]
---------------------

### Breaking changes

-   Changed default BPM engine from `activiti` to `camunda`. See [#149](https://github.com/latera/homs/pull/149) for details. Now you can set BPM engine in your `hbw.yml`. Example is in `hbw.yml.sample`, key `adapter`.

### Features
-   [#149](https://github.com/latera/homs/pull/149) Support Camunda as BPM engine.
-   [#146](https://github.com/latera/homs/pull/146) Replace PhantomJS with Capybara Webkit.
-   [#133](https://github.com/latera/homs/pull/133) Reduce docker images size by using `ruby:slim`.
-   [#144](https://github.com/latera/homs/pull/144) Reduce test execution time after Rails 5 upgrade.
-   [#147](https://github.com/latera/homs/pull/147) Improve manual installation instruction.
-   [#135](https://github.com/latera/homs/pull/135) Add `minio` image to `docker-compose.yml`.
-   [#136](https://github.com/latera/homs/pull/136) Reduce production docker image size by removing `libqtwebkit`.
-   [#156](https://github.com/latera/homs/pull/156) Rename initializer.
-   [#154](https://github.com/latera/homs/pull/154) Rename config for BPM engine.

### Bugfixes
-   [#5](https://github.com/latera/activiti-homs-docker/pull/5), [#1](https://github.com/latera/activiti-docker/pull/1) Fix activiti for homs docker image.
-   [#162](https://github.com/latera/homs/pull/162) Make sync request for checking BPM user. Prevents BPM widget rendering failure.
-   [#158](https://github.com/latera/homs/pull/158) Do not return empty element in case of missing BPM user.
-   [#157](https://github.com/latera/homs/pull/157) Fix GET request headers.
-   [#160](https://github.com/latera/homs/pull/160) Do not validate strings without pattern.
-   [#163](https://github.com/latera/homs/pull/163) Fix getting `NUMBER` from Oracle source.
-   [#155](https://github.com/latera/homs/pull/155) Add relative paths to `camunda` adapter.
-   [#145](https://github.com/latera/homs/pull/145) Fix `string` pattern usage and remove dependency from `jquery.formatter`.
-   [#140](https://github.com/latera/homs/pull/140) Submit form with files.
-   [#142](https://github.com/latera/homs/pull/142) Fix form-submit after Rails 5 upgrade.
-   [#134](https://github.com/latera/homs/pull/134) Validate arbitrary keys for profiles.
