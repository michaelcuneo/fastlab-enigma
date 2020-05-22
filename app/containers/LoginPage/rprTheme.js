/*
 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

export const Container = {
  fontFamily: 'brother-1816, sans-serif',
  fontWeight: '400',
  zIndex: '2',
};
export const FormContainer = {
  textAlign: 'center',
  marginTop: '20px',
  margin: '5% auto 50px',
  background: '#151417',
};
export const FormSection = {};
export const FormField = {};
export const SectionHeader = {
  fontFamily: 'brother-1816, sans-serif',
};
export const SectionBody = {};
export const SectionFooter = {};
export const SectionFooterPrimaryContent = {};
export const SectionFooterSecondaryContent = {};
export const Input = {};
export const Button = {
  background: 'white',
  color: 'black',
};
export const PhotoPickerButton = {};
export const PhotoPlaceholder = {};
export const SignInButton = {
  background: 'white',
};
export const SignInButtonIcon = {
  background: 'white',
  display: 'none',
};
export const SignInButtonContent = {};
export const Strike = {};
export const StrikeContent = {};
export const ActionRow = {};
export const FormRow = {};
export const A = {
  color: '#d7b740',
  textDecoration: 'none',
};
export const Hint = {};
export const Radio = {};
export const InputLabel = {
  display: 'none',
};
export const AmazonSignInButton = {};
export const FacebookSignInButton = {};
export const GoogleSignInButton = {};
export const OAuthSignInButton = {};
export const Toast = {
  position: 'relative',
  zIndex: '4',
  background: 'rgba(178, 34, 34, 1)',
  color: '#ffffff',
};
export const NavBar = {};
export const NavRight = {};
export const Nav = {};
export const NavItem = {};
export const NavButton = {};

const AmplifyTheme = {
  container: Container,
  formContainer: FormContainer,
  formSection: FormSection,
  formField: FormField,

  sectionHeader: SectionHeader,
  sectionBody: SectionBody,
  sectionFooter: SectionFooter,
  sectionFooterPrimaryContent: SectionFooterPrimaryContent,
  sectionFooterSecondaryContent: SectionFooterSecondaryContent,

  input: Input,
  button: Button,
  photoPickerButton: PhotoPickerButton,
  photoPlaceholder: PhotoPlaceholder,
  signInButton: SignInButton,
  signInButtonIcon: SignInButtonIcon,
  signInButtonContent: SignInButtonContent,
  amazonSignInButton: AmazonSignInButton,
  facebookSignInButton: FacebookSignInButton,
  googleSignInButton: GoogleSignInButton,
  oAuthSignInButton: OAuthSignInButton,

  formRow: FormRow,
  strike: Strike,
  strikeContent: StrikeContent,
  actionRow: ActionRow,
  a: A,

  hint: Hint,
  radio: Radio,
  inputLabel: InputLabel,
  toast: Toast,

  navBar: NavBar,
  nav: Nav,
  navRight: NavRight,
  navItem: NavItem,
  navButton: NavButton,
};

export default AmplifyTheme;
