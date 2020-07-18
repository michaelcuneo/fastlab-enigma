/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      id
      date
      title
      abstract
      details
      funding
      videoURL
      categoryId
      featured
      featuredImage {
        id
        key
        mime
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      category {
        id
        label
        value
        description
        Project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        images {
          items {
            id
            key
            mime
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      collaborators {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      id
      date
      title
      abstract
      details
      funding
      videoURL
      categoryId
      featured
      featuredImage {
        id
        key
        mime
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      category {
        id
        label
        value
        description
        Project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        images {
          items {
            id
            key
            mime
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      collaborators {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      id
      date
      title
      abstract
      details
      funding
      videoURL
      categoryId
      featured
      featuredImage {
        id
        key
        mime
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      category {
        id
        label
        value
        description
        Project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        images {
          items {
            id
            key
            mime
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      collaborators {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      data
      date
      videoURL
      featuredImage {
        id
        key
        mime
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        images {
          items {
            id
            key
            mime
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      staffID {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
            createdAt
            updatedAt
          }
          nextToken
        }
        projects {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      data
      date
      videoURL
      featuredImage {
        id
        key
        mime
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        images {
          items {
            id
            key
            mime
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      staffID {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
            createdAt
            updatedAt
          }
          nextToken
        }
        projects {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      data
      date
      videoURL
      featuredImage {
        id
        key
        mime
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        images {
          items {
            id
            key
            mime
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      staffID {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
            createdAt
            updatedAt
          }
          nextToken
        }
        projects {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      label
      value
      description
      Project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        collaborators {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      label
      value
      description
      Project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        collaborators {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      label
      value
      description
      Project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        collaborators {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole {
    onCreateRole {
      id
      label
      value
      description
      staff {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole {
    onUpdateRole {
      id
      label
      value
      description
      staff {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole {
    onDeleteRole {
      id
      label
      value
      description
      staff {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStaffRoles = /* GraphQL */ `
  subscription OnCreateStaffRoles {
    onCreateStaffRoles {
      id
      roleId
      role {
        id
        label
        value
        description
        staff {
          items {
            id
            roleId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
            createdAt
            updatedAt
          }
          nextToken
        }
        projects {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStaffRoles = /* GraphQL */ `
  subscription OnUpdateStaffRoles {
    onUpdateStaffRoles {
      id
      roleId
      role {
        id
        label
        value
        description
        staff {
          items {
            id
            roleId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
            createdAt
            updatedAt
          }
          nextToken
        }
        projects {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStaffRoles = /* GraphQL */ `
  subscription OnDeleteStaffRoles {
    onDeleteStaffRoles {
      id
      roleId
      role {
        id
        label
        value
        description
        staff {
          items {
            id
            roleId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
            createdAt
            updatedAt
          }
          nextToken
        }
        projects {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectStaff = /* GraphQL */ `
  subscription OnCreateProjectStaff {
    onCreateProjectStaff {
      id
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        collaborators {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
            createdAt
            updatedAt
          }
          nextToken
        }
        projects {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectStaff = /* GraphQL */ `
  subscription OnUpdateProjectStaff {
    onUpdateProjectStaff {
      id
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        collaborators {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
            createdAt
            updatedAt
          }
          nextToken
        }
        projects {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectStaff = /* GraphQL */ `
  subscription OnDeleteProjectStaff {
    onDeleteProjectStaff {
      id
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        collaborators {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
            createdAt
            updatedAt
          }
          nextToken
        }
        projects {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStaff = /* GraphQL */ `
  subscription OnCreateStaff {
    onCreateStaff {
      id
      name
      firstName
      lastName
      mugshot
      title
      bio
      email
      website
      cognitoID
      posts {
        items {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      roles {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      projects {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStaff = /* GraphQL */ `
  subscription OnUpdateStaff {
    onUpdateStaff {
      id
      name
      firstName
      lastName
      mugshot
      title
      bio
      email
      website
      cognitoID
      posts {
        items {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      roles {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      projects {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStaff = /* GraphQL */ `
  subscription OnDeleteStaff {
    onDeleteStaff {
      id
      name
      firstName
      lastName
      mugshot
      title
      bio
      email
      website
      cognitoID
      posts {
        items {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      roles {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      projects {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
      id
      key
      mime
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        collaborators {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        title
        data
        date
        videoURL
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        images {
          items {
            id
            key
            mime
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
      id
      key
      mime
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        collaborators {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        title
        data
        date
        videoURL
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        images {
          items {
            id
            key
            mime
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
      id
      key
      mime
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        collaborators {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        title
        data
        date
        videoURL
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          category {
            id
            label
            value
            description
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          collaborators {
            nextToken
          }
          createdAt
          updatedAt
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        images {
          items {
            id
            key
            mime
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGallery = /* GraphQL */ `
  subscription OnCreateGallery {
    onCreateGallery {
      id
      name
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        collaborators {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        title
        data
        date
        videoURL
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      images {
        items {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGallery = /* GraphQL */ `
  subscription OnUpdateGallery {
    onUpdateGallery {
      id
      name
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        collaborators {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        title
        data
        date
        videoURL
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      images {
        items {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGallery = /* GraphQL */ `
  subscription OnDeleteGallery {
    onDeleteGallery {
      id
      name
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        collaborators {
          items {
            id
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        title
        data
        date
        videoURL
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          images {
            nextToken
          }
          createdAt
          updatedAt
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      images {
        items {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
            createdAt
            updatedAt
          }
          post {
            id
            title
            data
            date
            videoURL
            createdAt
            updatedAt
          }
          gallery {
            id
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
