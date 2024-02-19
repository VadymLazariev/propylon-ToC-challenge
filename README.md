# Propylon Frontend Challenge

  

## Overview

  

This document provides an in-depth overview of the architecture and key functionalities of the Propylon Frontend Challenge project. It is designed to provide the necessary knowledge to comprehend the project's structure, components, custom hooks, API interactions, and data transformation methods.

  

## Table of Contents

- [Installation](#installation)

- [Tests](#tests)

- [Project Structure](#project-structure)

- [Components](#components)

- [Shared Components](#shared-components)

- [Hooks](#hooks)

- [API](#api)

- [Helpers](#helpers)

  

## Installation

  

To set up and run the project locally, follow these steps:

  

```bash

npm install

npm start

```

  

## Tests

  

To run unit tests locally follow these steps:

  

```bash

npm run test

```

  

## Project Structure

![Screenshot](https://github.com/VadymLazariev/propylon-ToC-challenge/assets/29289208/b0c2b991-229e-4675-8d29-24bdf22a5014)

The project is structured into several directories within the src folder, each tailored for specific aspects of the application:

- `components/:` Contains UI components including Navigation, ContentView, and TableOfContents, alongside a shared directory for widely used components.

- `context/:` Manages application-wide state with context modules such as ChapterContext.

- `hooks/:` Custom React hooks for encapsulating component logic and state management. 

- `api/:` Modules for backend communication and data fetching. 

- `helpers/:` Utility functions for tasks like data transformation.

## Components

The components directory is foundational to the project, hosting the UI components that constitute the application. It includes:

- `<Navigation/>`: This component provides a list of nested navigation items.
- `<NavigationItem/>`: This component handles the logic for the navigation item as well as expands the component and provides a click event to share the data with the `<ContentView/>` component.
- `<ContentView/>`: Serves as the main area for displaying content based on user interactions and provides a view for selected navigation items. 
- `<TableOfContents/>`: Provides a container functionality for `<Navigation/>` and `<ContentView/>`. Loads data by using the `useGetDocumentStructure()` hook and provides it to the child components. 


## Shared Components

Within `components/shared`, we store reusable components that are used in multiple places across the application:

- `Tooltip`: A small informational box that appears on hover or focus, offering extra details.
- `Loader`: Visual feedback indicating that data is being loaded.
- `Error`: Displays when something goes wrong, providing users with error messages. Shows refetch button to run the potentially failed request again.

## Hooks

This folder is dedicated to implementing custom hooks.

 Implements `useGetDocumentStructure()` to get data with already provided parent-child relations.

## API

This folder provides API interaction and provides methods for server requests. 

- `requests`: Provides a file with request methods to the server. 
  Implements the `getDocumentsStructure()` method to get the structure of the documents. 

## Helpers

This folder provides helper functions for data transformations.

Implements `transformToHierarchy()` to use it inside the `useGetDocumentStructure()` to create hierarchical relations between chapters. 

