/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
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
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStaffRoles = /* GraphQL */ `
  query GetStaffRoles($id: ID!) {
    getStaffRoles(id: $id) {
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
export const listStaffRoless = /* GraphQL */ `
  query ListStaffRoless(
    $filter: ModelStaffRolesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaffRoless(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roleId
        role {
          id
          label
          value
          description
          staff {
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
      nextToken
    }
  }
`;
export const getProjectStaff = /* GraphQL */ `
  query GetProjectStaff($id: ID!) {
    getProjectStaff(id: $id) {
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
export const listProjectStaffs = /* GraphQL */ `
  query ListProjectStaffs(
    $filter: ModelProjectStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectStaffs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getStaff = /* GraphQL */ `
  query GetStaff($id: ID!) {
    getStaff(id: $id) {
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
export const listStaffs = /* GraphQL */ `
  query ListStaffs(
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaffs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
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
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getGallery = /* GraphQL */ `
  query GetGallery($id: ID!) {
    getGallery(id: $id) {
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
export const listGallerys = /* GraphQL */ `
  query ListGallerys(
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGallerys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
